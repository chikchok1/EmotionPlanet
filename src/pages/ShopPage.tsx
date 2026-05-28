import { useState } from "react";
import {
  ACCESSORIES,
  ACCESSORY_CATEGORIES,
  CATEGORY_LABELS,
  RARITY_COLORS,
  RARITY_LABELS
} from "../data/accessories";
import { EMOTIONS } from "../data/emotions";
import { AccessorySprite } from "../components/planet/AccessorySprite";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import type { Accessory, AccessoryCategory } from "../types";

export function ShopPage() {
  const { state, purchaseAccessory, equipAccessory, unequipAccessory } = useEmotionPlanet();
  const [category, setCategory] = useState<AccessoryCategory>("hat");
  const [toast, setToast] = useState<string | null>(null);
  const items = ACCESSORIES.filter((item) => item.category === category);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 1600);
  };

  const handleBuy = (item: Accessory) => {
    if (purchaseAccessory(item.id)) showToast(`${item.name} 구매 완료!`);
    else showToast("포인트가 부족해요");
  };

  const handleEquip = (item: Accessory) => {
    if (state.equippedAccessories[item.category] === item.id) {
      unequipAccessory(item.category);
      showToast("장착 해제됨");
      return;
    }

    equipAccessory(item.id, item.category);
    showToast(`${item.name} 장착!`);
  };

  return (
    <div className="screen-stack shop-screen">
      <header className="top-bar">
        <div className="section-heading">
          <h1 className="screen-title">악세사리 상점</h1>
          <p>감정 기록으로 포인트를 모아요</p>
        </div>
        <div className="point-pill">
          <span>⭐</span>
          {state.points.toLocaleString()}pt
        </div>
      </header>

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
            onClick={() => setCategory(item)}
          >
            {CATEGORY_LABELS[item]}
          </button>
        ))}
      </div>

      <section className="shop-grid">
        {items.map((item) => {
          const owned = state.ownedAccessories.includes(item.id);
          const equipped = state.equippedAccessories[item.category] === item.id;
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
      {owned ? (
        <button className="mini-button full" type="button" onClick={onEquip}>
          {equipped ? "장착됨" : "장착"}
        </button>
      ) : (
        <button className="mini-button full" type="button" disabled={!canBuy} onClick={onBuy}>
          ★ {item.price}
        </button>
      )}
    </article>
  );
}
