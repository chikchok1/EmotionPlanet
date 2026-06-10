import { useState } from "react";
import { ACCESSORIES, ACCESSORY_CATEGORIES, CATEGORY_LABELS, RARITY_COLORS, RARITY_LABELS } from "../data/accessories";
import { PLANETS } from "../data/planets";
import { AccessorySprite } from "../components/planet/AccessorySprite";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import { getRememberedAccessoryCategory, rememberAccessoryCategory } from "../utils/accessoryCategory";
import { getLatestEmotion } from "../utils/planet";
import type { Accessory, AccessoryCategory, RoutePath } from "../types";

type CustomizePageProps = {
  navigate: (path: RoutePath) => void;
};

export function CustomizePage({ navigate }: CustomizePageProps) {
  const { state, equipAccessory, unequipAccessory, equipAccessoryForPlanet, unequipAccessoryForPlanet, getEquippedForPlanet, getDominantEmotion, getPlanetRecords, getTodayRecord, viewingPlanetIndex } = useEmotionPlanet();
  const [category, setCategory] = useState<AccessoryCategory>(getRememberedAccessoryCategory);
  const [toast, setToast] = useState<string | null>(null);
  const isViewingCurrent = viewingPlanetIndex === state.currentPlanetIndex;
  const planet = PLANETS[viewingPlanetIndex];
  const planetRecords = getPlanetRecords(viewingPlanetIndex);
  const emotion = getTodayRecord()?.emotion ?? getLatestEmotion(planetRecords, getDominantEmotion(planetRecords));
  const equippedAccessories = getEquippedForPlanet(viewingPlanetIndex);
  const ownedItems = ACCESSORIES.filter(
    (item) => item.category === category && state.ownedAccessories.includes(item.id)
  );
  const activeEquippedId = equippedAccessories[category];
  const activeEquippedItem = activeEquippedId
    ? ACCESSORIES.find((item) => item.id === activeEquippedId)
    : null;

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 1400);
  };

  const toggleItem = (item: Accessory) => {
    if (isViewingCurrent) {
      if (state.equippedAccessories[item.category] === item.id) {
        unequipAccessory(item.category);
        showToast(`${CATEGORY_LABELS[item.category]} 해제됨`);
      } else {
        equipAccessory(item.id, item.category);
        showToast(`${item.name} 적용됨`);
      }
    } else {
      if (equippedAccessories[item.category] === item.id) {
        unequipAccessoryForPlanet(viewingPlanetIndex, item.category);
        showToast(`${CATEGORY_LABELS[item.category]} 해제됨`);
      } else {
        equipAccessoryForPlanet(viewingPlanetIndex, item.id, item.category);
        showToast(`${item.name} 적용됨`);
      }
    }
  };

  const clearCategory = () => {
    if (!activeEquippedId) return;
    if (isViewingCurrent) unequipAccessory(category);
    else unequipAccessoryForPlanet(viewingPlanetIndex, category);
    showToast(`${CATEGORY_LABELS[category]} 해제됨`);
  };

  const selectCategory = (nextCategory: AccessoryCategory) => {
    rememberAccessoryCategory(nextCategory);
    setCategory(nextCategory);
  };

  const openShop = () => {
    rememberAccessoryCategory(category);
    navigate("/shop");
  };

  return (
    <div className="screen-stack customize-screen">
      <header className="subpage-header">
        <button className="icon-button" type="button" onClick={() => navigate("/planet")}>
          ←
        </button>
        <h1 className="screen-title">행성 꾸미기</h1>
      </header>

      <section className="customize-preview">
        <PlanetAvatar planet={planet} emotion={emotion} equipped={equippedAccessories} size={190} animate />
        <div className="customize-preview-caption">
          <strong>{planet.name}</strong>
          <span>{isViewingCurrent ? "현재 성장 중인 행성" : "완성된 행성 꾸미는 중"}</span>
        </div>
        <div className="slot-row compact">
          {ACCESSORY_CATEGORIES.map((item) => (
            <button
              key={item}
              className={`accessory-slot ${category === item ? "active" : ""}`}
              type="button"
              onClick={() => selectCategory(item)}
            >
              <div className="accessory-slot-icon filled">
                <AccessorySprite id={equippedAccessories[item]} size={30} />
                {!equippedAccessories[item] ? <span>+</span> : null}
              </div>
              <span>{CATEGORY_LABELS[item]}</span>
            </button>
          ))}
        </div>
        <div className="active-slot-summary">
          <div>
            <span className="pixel-label">선택한 슬롯</span>
            <strong>
              {CATEGORY_LABELS[category]}
              {activeEquippedItem ? ` · ${activeEquippedItem.name}` : " · 비어 있음"}
            </strong>
          </div>
          <button className="mini-button" type="button" disabled={!activeEquippedId} onClick={clearCategory}>
            해제
          </button>
        </div>
      </section>

      <div className="category-tabs">
        {ACCESSORY_CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "active" : ""}
            onClick={() => selectCategory(item)}
          >
            {CATEGORY_LABELS[item]}
          </button>
        ))}
      </div>

      <section className="shop-grid">
        {ownedItems.length === 0 ? (
          <div className="empty-state">
            <span>🛍️</span>
            <p>{CATEGORY_LABELS[category]} 카테고리에 보유한 아이템이 없어요</p>
            <button className="mini-button" type="button" onClick={openShop}>
              상점 가기
            </button>
          </div>
        ) : (
          ownedItems.map((item) => {
            const equipped = equippedAccessories[item.category] === item.id;
            const rarityColor = RARITY_COLORS[item.rarity];
            return (
              <button
                key={item.id}
                className={`customize-item${equipped ? " equipped" : ""}`}
                type="button"
                onClick={() => toggleItem(item)}
              >
                <AccessorySprite id={item.id} size={item.category === "ring" ? 70 : 56} />
                <span className="rarity-badge" style={{ color: rarityColor, borderColor: `${rarityColor}77` }}>
                  {RARITY_LABELS[item.rarity]}
                </span>
                <strong>{item.name}</strong>
                <small>{equipped ? "현재 적용" : "탭해서 적용"}</small>
              </button>
            );
          })
        )}
      </section>

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}
