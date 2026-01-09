"use client";

import CardList from "@/components/cardStack/CardList";
import Tag from "@/components/shared/Tag";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type BlogCard = {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    onBlogClick?: () => void;
};

interface BlogCardTenProps {
    blogs: BlogCard[];
    animationType: CardAnimationType;
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    cardClassName?: string;
    textBoxTitleClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    cardContentClassName?: string;
    cardTitleClassName?: string;
    subtitleClassName?: string;
    tagsContainerClassName?: string;
    tagClassName?: string;
    arrowClassName?: string;
}

const BlogCardTen = ({
    blogs,
    animationType,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    useInvertedBackground,
    ariaLabel = "Blog section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    cardContentClassName = "",
    cardTitleClassName = "",
    subtitleClassName = "",
    tagsContainerClassName = "",
    tagClassName = "",
    arrowClassName = "",
}: BlogCardTenProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <CardList
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            animationType={animationType}
            
            useInvertedBackground={useInvertedBackground}
            className={className}
            containerClassName={containerClassName}
            cardClassName={cardClassName}
            titleClassName={textBoxTitleClassName}
            descriptionClassName={textBoxDescriptionClassName}
            textBoxClassName={textBoxClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
            ariaLabel={ariaLabel}
        >
            {blogs.map((blog) => (
                <article
                    key={blog.id}
                    className={cls(
                        "relative z-1 w-full min-h-0 h-full flex flex-col gap-6 cursor-pointer group p-6 md:p-10",
                        cardContentClassName
                    )}
                    onClick={blog.onBlogClick}
                    role="article"
                    aria-label={blog.title}
                >
                    <div className="flex flex-col">
                        <h3 className={cls(
                            "text-3xl md:text-5xl font-medium text-balance leading-tight line-clamp-2",
                            shouldUseLightText ? "text-background" : "text-foreground",
                            cardTitleClassName
                        )}>
                            {blog.title}
                        </h3>

                        <span className={cls(
                            "text-base md:text-lg leading-tight",
                            shouldUseLightText ? "text-background/75" : "text-foreground/75",
                            subtitleClassName
                        )}>
                            {blog.subtitle}
                        </span>
                    </div>

                    <div className="flex items-end justify-between mt-auto">
                        <div className={cls("flex flex-wrap gap-2", tagsContainerClassName)}>
                            {blog.tags.map((tagText, index) => (
                                <Tag key={index} text={tagText} useInvertedBackground={useInvertedBackground} className={tagClassName} />
                            ))}
                        </div>

                        <ArrowRight
                            className={cls(
                                "h-[var(--text-base)] w-auto transition-transform duration-300 group-hover:-rotate-45",
                                shouldUseLightText ? "text-background" : "text-foreground",
                                arrowClassName
                            )}
                            strokeWidth={1.5}
                        />
                    </div>
                </article>
            ))}
        </CardList>
    );
};

BlogCardTen.displayName = "BlogCardTen";

export default BlogCardTen;
