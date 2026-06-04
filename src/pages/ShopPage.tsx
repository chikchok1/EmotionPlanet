import { useState } from "react";
import {
  ACCESSORIES,
  ACCESSORY_CATEGORIES,
  CATEGORY_LABELS,
  RARITY_COLORS,
  RARITY_LABELS
} from "../data/accessories";
import { EMOTIONS } from "../data/emotions";
import { PLANETS } from "../data/planets";
import { AccessorySprite } from "../components/planet/AccessorySprite";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import { getRememberedAccessoryCategory, rememberAccessoryCategory } from "../utils/accessoryCategory";
import type { Accessory, AccessoryCategory, RoutePath } from "../types";

type ShopPageProps = {
  navigate: (path: RoutePath) => void;
};

export function ShopPage({ navigate }: ShopPageProps) {
  const {
    state,
    viewingPlanetIndex,
    purchaseAccessory,
    equipAccessory,
    unequipAccessory,
    equipAccessoryForPlanet,
    unequipAccessoryForPlanet,
    getEquippedForPlanet,
    getDominantEmotion,
    getPlanetRecords
  } = useEmotionPlanet();
  const [category, setCategory] = useState<AccessoryCategory>(getRememberedAccessoryCategory);
  const [toast, setToast] = useState<string | null>(null);
  const items = ACCESSORIES.filter((item) => item.category === category);
  const planet = PLANETS[viewingPlanetIndex];
  const isViewingCurrent = viewingPlanetIndex === state.currentPlanetIndex;
  const equippedAccessories = getEquippedForPlanet(viewingPlanetIndex);
  const previewEmotion = getDominantEmotion(getPlanetRecords(viewingPlanetIndex));
  const equippedItem = equippedAccessories[category]
    ? ACCESSORIES.find((item) => item.id === equippedAccessories[category])
    : null;

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 1600);
  };

  const handleBuy = (item: Accessory) => {
    if (!purchaseAccessory(item.id)) {
      showToast("포인트가 부족해요");
      return;
    }

    if (isViewingCurrent) equipAccessory(item.id, item.category);
    else equipAccessoryForPlanet(viewingPlanetIndex, item.id, item.category);

    showToast(`${item.name} 구매 후 적용!`);
  };

  const handleEquip = (item: Accessory) => {
    if (equippedAccessories[item.category] === item.id) {
      if (isViewingCurrent) unequipAccessory(item.category);
      else unequipAccessoryForPlanet(viewingPlanetIndex, item.category);
      showToast(`${CATEGORY_LABELS[item.category]} 해제됨`);
      return;
    }

    if (isViewingCurrent) equipAccessory(item.id, item.category);
    else equipAccessoryForPlanet(viewingPlanetIndex, item.id, item.category);
    showToast(`${item.name} 적용!`);
  };

  const openCustomize = () => {
    rememberAccessoryCategory(category);
    navigate("/customize");
  };

  const selectCategory = (nextCategory: AccessoryCategory) => {
    rememberAccessoryCategory(nextCategory);
    setCategory(nextCategory);
  };

  return (
    <div className="screen-stack shop-screen">
      <header className="top-bar">
        <div className="section-heading">
          <h1 className="screen-title">꾸미기 상점</h1>
          <p>감정 기록으로 포인트를 모아요</p>
        </div>
        <div className="point-pill">
          <span>⭐</span>
          {state.points.toLocaleString()}pt
        </div>
      </header>

      <section className="shop-preview-panel">
        <div className="shop-preview-copy">
          <span className="pixel-label">꾸미기 미리보기</span>
          <strong>{planet.name}</strong>
          <p>
            {equippedItem
              ? `${CATEGORY_LABELS[category]}: ${equippedItem.name}`
              : `${CATEGORY_LABELS[category]} 슬롯이 비어 있어요`}
          </p>
          <button className="mini-button" type="button" onClick={openCustomize}>
            직접 꾸미기
          </button>
        </div>
        <PlanetAvatar planet={planet} emotion={previewEmotion} equipped={equippedAccessories} size={142} animate />
      </section>

      <section className="panel">
        <span className="pixel-label">포인트 획득</span>
        <div className="point-guide">
          {EMOTIONS.map((emotion) => (
            <div className="point-guide-item" key={emotion.id}>
              <div className="point-guide-planet">
                <img
                  src={emotion.planetImage}
                  alt={emotion.name}
                  className="point-guide-planet-img"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                    const fb = t.nextElementSibling as HTMLElement;
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <span className="point-guide-planet-fallback" style={{ display: "none" }}>
                  {emotion.emoji}
                </span>
              </div>
              <span style={{ color: emotion.color }}>+{emotion.points}</span>
            </div>
          ))}
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
        {items.map((item) => {
          const owned = state.ownedAccessories.includes(item.id);
          const equipped = equippedAccessories[item.category] === item.id;
          return (
            <ShopItemCard
              key={item.id}
              item={item}
              owned={owned}
              equipped={equipped}
              canBuy={state.points >= item.price}
              onBuy={() => handleBuy(item)}
              onEquip={() => handleEquip(item)}
            />
          );
        })}
      </section>

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}

function ShopItemCard({
  item,
  owned,
  equipped,
  canBuy,
  onBuy,
  onEquip
}: {
  item: Accessory;
  owned: boolean;
  equipped: boolean;
  canBuy: boolean;
  onBuy: () => void;
  onEquip: () => void;
}) {
  const rarityColor = RARITY_COLORS[item.rarity];

  return (
    <article className={`shop-item-card${equipped ? " equipped" : ""}${owned ? " owned" : ""}`}>
      <div className="shop-item-art">
        <AccessorySprite id={item.id} size={54} />
        {equipped ? <span className="equipped-check">✓</span> : null}
      </div>
      <span className="rarity-badge" style={{ color: rarityColor, borderColor: `${rarityColor}77` }}>
        {RARITY_LABELS[item.rarity]}
      </span>
      <strong>{item.name}</strong>
      <small className="shop-item-state">
        {equipped ? "현재 적용" : owned ? "보유 중" : `${item.price.toLocaleString()}pt`}
      </small>
      {owned ? (
        <button className="mini-button full" type="button" onClick={onEquip}>
          {equipped ? "해제" : "적용"}
        </button>
      ) : (
        <button className="mini-button full" type="button" disabled={!canBuy} onClick={onBuy}>
          {canBuy ? "구매+적용" : "포인트 부족"}
        </button>
      )}
    </article>
  );
}
