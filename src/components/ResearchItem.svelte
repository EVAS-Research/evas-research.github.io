<script lang="ts">
    import { marked } from "marked";

    import Icon from "@iconify/svelte";

    export interface Props {
        data: {
            authors: string;
            year: string;
            title: string;
            venue: string;
            url: string;
        };
        body: string;
        highlightItems?: Array<string>;
    }

    let { data, body, highlightItems = [] }: Props = $props();
    let bodyHighlighted = $derived.by(() => {
        let _bodyHighlighted = body;

        highlightItems.forEach((element) => {
            if (element.length < 3) return;

            _bodyHighlighted = _bodyHighlighted.replaceAll(
                element,
                `**${element}**`,
            );
        });
        return _bodyHighlighted;
    });
</script>

<article class="mx-auto lg:w-10/12">
    <div class="flex flex-col gap-2">
        <h3 class="lg:text-lg text-pretty">
            <span>{data.authors}</span>&nbsp;
            <span class="opacity-60">({data.year}).</span>&nbsp;
            <span class="font-bold">{data.title}.</span>&nbsp;
            <span class="text-sm lg:text-base italic font-light"
                >{data.venue}</span
            >
        </h3>
        <footer class="text-sm font-bold text-figred">
            <a
                class="flex content-center gap-2"
                href={data.url}
                target="_blank"
            >
                <Icon class="block text-2xl" icon="tdesign:link" />
                <span class="underline underline-offset-6">{data.url}</span>
            </a>
        </footer>
        <section class="text-sm text-pretty leading-6">
            {@html marked.parse(bodyHighlighted)}
        </section>
    </div>
</article>
