import React from "react";

export const FlipCard = ({
  variant = "hover",
  frontOfCard,
  backOfCard
}) => {
  return <flip-card variant={"hover"} className="trivia-card">
  <div slot="front">
  {frontOfCard}
  </div>
  <div slot="back">
  {backOfCard}
  </div>
  </flip-card>
}