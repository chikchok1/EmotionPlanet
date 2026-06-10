import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ACCESSORIES,
  ACCESSORY_CATEGORIES,
  CATEGORY_LABELS,
  RARITY_COLORS,
  RARITY_LABELS
} from "../data/accessories";
import { EMOTIONS } from "../data/emotions";
import { getSpaceBackgroundUrl } from "../data/backgrounds";
import { PLANETS } from "../data/planets";
import { DailyAdRewardButton } from "../components/layout/DailyAdRewardButton";
import { AccessorySprite } from "../components/planet/AccessorySprite";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import { getRememberedAccessoryCategory, rememberAccessoryCategory } from "../utils/accessoryCategory";
import { getEmotionPlanetImage } from "../utils/emotionPlanetImage";
import { getLatestEmotion } from "../utils/planet";
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
    getPlanetRecords,
    getTodayRecord,
    setPreviewBackground
  } = useEmotionPlanet();
  const [category, setCategory] = useState<AccessoryCategory>(getRememberedAccessoryCategory);
  const [toast, setToast] = useState<string | null>(null);
  const [previewItemId, setPreviewItemId] = useState<string | null>(null);
  const previewPanelRef = useRef<HTMLElement | null>(null);
  const items = ACCESSORIES.filter((item) => item.category === category);
  const planet = PLANETS[viewingPlanetIndex];
  const isViewingCurrent = viewingPlanetIndex === state.currentPlanetIndex;
  const equippedAccessories = getEquippedForPlanet(viewingPlanetIndex);
  const previewItem = previewItemId ? ACCESSORIES.find((item) => item.id === previewItemId) ?? null : null;
  const previewEquipped = previewItem
    ? { ...equippedAccessories, [previewItem.category]: previewItem.id }
    : equippedAccessories;
  const previewBackgroundUrl = previewItem?.category === "background"
    ? getSpaceBackgroundUrl(previewItem.id)
    : undefined;
  const planetRecords = getPlanetRecords(viewingPlanetIndex);
  const previewEmotion = getTodayRecord()?.emotion ?? getLatestEmotion(planetRecords, getDominantEmotion(planetRecords));
  const equippedItem = equippedAccessories[category]
    ? ACCESSORIES.find((item) => item.id === equippedAccessories[category])
    : null;

  useEffect(() => {
    setPreviewBackground(previewItem?.category === "background" ? previewItem.id : null);
    return () => setPreviewBackground(null);
  }, [previewItem, setPreviewBackground]);

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

    setPreviewItemId(null);
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
    setPreviewItemId(null);
    showToast(`${item.name} 적용!`);
  };

  const openCustomize = () => {
    rememberAccessoryCategory(category);
    navigate("/customize");
  };

  const selectCategory = (nextCategory: AccessoryCategory) => {
    rememberAccessoryCategory(nextCategory);
    setCategory(nextCategory);
    setPreviewItemId(null);
  };

  const previewAccessory = (item: Accessory) => {
    setPreviewItemId(item.id);
    window.requestAnimationFrame(() => {
      previewPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  return (
    <div className="screen-stack shop-screen">
      <header className="top-bar">
        <div className="section-heading">
          <h1 className="screen-title">꾸미기 상점</h1>
          <p>감정 기록으로 포인트를 모아요</p>
        </div>
        <div className="top-actions">
          <div className="point-pill">
            <span>⭐</span>
            {state.points.toLocaleString()}pt
          </div>
          <DailyAdRewardButton />
        </div>
      </header>

      <section
        ref={previewPanelRef}
        className={`shop-preview-panel${previewItem ? " previewing" : ""}${previewBackgroundUrl ? " has-preview-background" : ""}`}
        style={previewBackgroundUrl ? {
          "--shop-preview-background": `url('${previewBackgroundUrl}')`
        } as CSSProperties : undefined}
      >
        {previewItem ? (
          <div className="shop-preview-status">
            <span>미리보기</span>
            <strong>{previewItem.name}</strong>
            <button type="button" onClick={() => setPreviewItemId(null)}>
              원래대로
            </button>
          </div>
        ) : null}
        <div className="shop-preview-planet">
          <PlanetAvatar planet={planet} emotion={previewEmotion} equipped={previewEquipped} size={160} animate />
        </div>
        <button className="mini-button shop-preview-btn" type="button" onClick={openCustomize}>
          직접 꾸미기
        </button>
      </section>

      <section className="panel">
        <span className="pixel-label">포인트 획득</span>
        <div className="point-guide">
          {EMOTIONS.map((emotion) => (
            <div className="point-guide-item" key={emotion.id}>
              <div className="point-guide-planet">
                <img
                  src={getEmotionPlanetImage(planet, emotion.id, emotion.planetImage)}
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
              previewing={previewItem?.id === item.id}
              onPreview={() => previewAccessory(item)}
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
  previewing,
  onPreview,
  onBuy,
  onEquip
}: {
  item: Accessory;
  owned: boolean;
  equipped: boolean;
  canBuy: boolean;
  previewing: boolean;
  onPreview: () => void;
  onBuy: () => void;
  onEquip: () => void;
}) {
  const rarityColor = RARITY_COLORS[item.rarity];

  return (
    <article className={`shop-item-card${equipped ? " equipped" : ""}${owned ? " owned" : ""}${previewing ? " previewing" : ""}`}>
      <div className="shop-item-art">
        <AccessorySprite id={item.id} size={item.category === "ring" ? 70 : 54} />
        {previewing ? <span className="preview-check">보기</span> : equipped ? <span className="equipped-check">✓</span> : null}
      </div>
      <span className="rarity-badge" style={{ color: rarityColor, borderColor: `${rarityColor}77` }}>
        {RARITY_LABELS[item.rarity]}
      </span>
      <strong>{item.name}</strong>
      <small className="shop-item-state">
        {equipped ? "현재 적용" : owned ? "보유 중" : `${item.price.toLocaleString()}pt`}
      </small>
      <div className="shop-item-actions">
        <button className="mini-button ghost" type="button" onClick={onPreview}>
          {previewing ? "보는 중" : "미리보기"}
        </button>
        {owned ? (
          <button className="mini-button full" type="button" onClick={onEquip}>
            {equipped ? "해제" : "적용"}
          </button>
        ) : (
          <button className="mini-button full" type="button" disabled={!canBuy} onClick={onBuy}>
            {canBuy ? "구매+적용" : "포인트 부족"}
          </button>
        )}
      </div>
    </article>
  );
}
