import type { CTAButtonVariant } from "@/components/button/types";
import type { AnimationType } from "@/components/text/types";

export type BorderRadiusPreset = "sharp" | "rounded" | "soft" | "pill";
export type ContentWidthPreset = "small" | "smallMedium" | "compact" | "mediumSmall" | "medium" | "mediumLarge";
export type SizingPreset = "medium" | "mediumLarge" | "largeSmall" | "large" | "mediumSizeLargeTitles" | "mediumLargeSizeLargeTitles" | "largeSmallSizeLargeTitles" | "largeSizeMediumTitles" | "mediumLargeSizeMediumTitles" | "largeSmallSizeMediumTitles";
export type HeadingFontWeight = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
export type BackgroundType =
  | "none"
  | "plain"
  | "grid"
  | "dotGrid"
  | "circleGradient"
  | "aurora"
  | "floatingGradient"
  | "animatedGrid"
  | "animatedAurora"
  | "fluid"
  | "radialGradient"
  | "noise"
  | "noiseGradient"
  | "noiseDiagonalGradient";

export type CardStyleVariant = "solid" | "solid-accent" | "solid-accent-light" | "outline" | "outline-light" | "elevated" | "elevated-accent" | "elevated-accent-light" | "gradient-subtle" | "gradient-mesh" | "gradient-radial" | "neon-glow" | "inset" | "spotlight" | "shadow-colored" | "glass-elevated" | "glass-depth" | "gradient-bordered" | "layered-gradient";
export type PrimaryButtonStyleVariant = "gradient" | "shadow" | "flat" | "layered-depth" | "radial-glow" | "diagonal-gradient" | "neon-glow-border" | "outline";
export type SecondaryButtonStyleVariant = "glass" | "outline" | "solid" | "layered" | "radial-glow";

export interface ThemeConfig {
  defaultButtonVariant: CTAButtonVariant;
  defaultTextAnimation: AnimationType;
  borderRadius: BorderRadiusPreset;
  contentWidth: ContentWidthPreset;
  sizing: SizingPreset;
  background: BackgroundType;
  cardStyle: CardStyleVariant;
  primaryButtonStyle: PrimaryButtonStyleVariant;
  secondaryButtonStyle: SecondaryButtonStyleVariant;
  headingFontWeight: HeadingFontWeight;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultButtonVariant: CTAButtonVariant;
  defaultTextAnimation: AnimationType;
  borderRadius: BorderRadiusPreset;
  contentWidth: ContentWidthPreset;
  sizing: SizingPreset;
  background: BackgroundType;
  cardStyle: CardStyleVariant;
  primaryButtonStyle: PrimaryButtonStyleVariant;
  secondaryButtonStyle: SecondaryButtonStyleVariant;
  headingFontWeight: HeadingFontWeight;
}
