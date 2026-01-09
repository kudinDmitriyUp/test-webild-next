"use client";

import TextAnimation from "@/components/text/TextAnimation";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type Metric = {
    id: string;
    value: string;
    title: string;
};

interface MetricCardEightProps {
    title: string;
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    videoAriaLabel?: string;
    metrics: Metric[];
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    topSectionClassName?: string;
    textWrapperClassName?: string;
    titleClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    metricsContainerClassName?: string;
    metricClassName?: string;
    valueClassName?: string;
    metricTitleClassName?: string;
}

const MetricCardEight = ({
    title,
    imageSrc,
    imageAlt,
    videoSrc,
    videoAriaLabel,
    metrics,
    useInvertedBackground,
    ariaLabel = "Metrics section",
    className = "",
    containerClassName = "",
    topSectionClassName = "",
    textWrapperClassName = "",
    titleClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    metricsContainerClassName = "",
    metricClassName = "",
    valueClassName = "",
    metricTitleClassName = "",
}: MetricCardEightProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <section
            aria-label={ariaLabel}
            className={cls(
                "relative py-20",
                useInvertedBackground === "invertCard"
                    ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
                    : "w-full",
                useInvertedBackground === "invertDefault" && "bg-foreground",
                className
            )}
        >
            <div className={cls("w-content-width mx-auto flex flex-col gap-10", containerClassName)}>
                <div className={cls("flex flex-col md:flex-row md:items-center md:justify-between gap-8", topSectionClassName)}>
                    <div className={cls("flex-1", textWrapperClassName)}>
                        <TextAnimation
                            type={theme.defaultTextAnimation}
                            text={title}
                            variant="words-trigger"
                            className={cls(
                                "text-3xl md:text-5xl font-medium leading-tight",
                                (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background",
                                titleClassName
                            )}
                        />
                    </div>
                    <div className={cls("relative w-full md:w-20 aspect-square rounded-theme-capped overflow-hidden flex-shrink-0", mediaWrapperClassName)}>
                        <MediaContent
                            imageSrc={imageSrc}
                            imageAlt={imageAlt}
                            videoSrc={videoSrc}
                            videoAriaLabel={videoAriaLabel}
                            imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                        />
                    </div>
                </div>

                <div className={cls(
                    "grid gap-8",
                    metrics.length === 2 && "grid-cols-2",
                    metrics.length === 3 && "grid-cols-2 md:grid-cols-3",
                    metrics.length >= 4 && "grid-cols-2 md:grid-cols-4",
                    metricsContainerClassName
                )}>
                    {metrics.map((metric) => (
                        <div
                            key={metric.id}
                            className={cls(
                                "flex flex-col gap-6 card rounded-theme-capped p-6",
                                metricClassName
                            )}
                        >
                            <div className="flex flex-col">
                                <h3 className={cls(
                                    "text-5xl md:text-6xl font-medium leading-tight truncate",
                                    shouldUseLightText ? "text-background" : "text-foreground",
                                    valueClassName
                                )}>
                                    {metric.value}
                                </h3>
                                <p className={cls(
                                    "text-base leading-tight truncate",
                                    shouldUseLightText ? "text-background/70" : "text-foreground/70",
                                    metricTitleClassName
                                )}>
                                    {metric.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

MetricCardEight.displayName = "MetricCardEight";

export default MetricCardEight;
