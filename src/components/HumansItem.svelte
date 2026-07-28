<script lang="ts">
    import { marked } from "marked";

    import Icon from "@iconify/svelte";

    export interface Props {
        data: {
            name: string;
            picture: ImageMetadata;
            website: string;
            research: string;
        };
        body: string;
    }

    let { data, body }: Props = $props();

    const socialsMap = [
        {
            icon: "tdesign:assignment-user",
            name: "visit the human",
        },
        {
            icon: "tdesign:folder-search",
            name: "follow the research",
        },
    ];
</script>

<article
    class="relative flex flex-col items-center justify-center gap-12 bg-white p-8 xl:pt-14 border-b-4 border-figred lg:max-w-sm"
>
    <div class="shrink-0 w-64 h-64">
        <img class="w-full h-auto" src={data.picture.src} alt={data.name} />
    </div>
    <div class="shrink">
        <h3 class="font-bold text-3xl mb-1.5">{data.name}</h3>
        <div class="text-sm mb-4 text-pretty leading-6">
            {@html marked.parse(body)}
        </div>
        <div class="flex gap-2">
            {#each [data.website, data.research] as url, index}
                <a
                    class="text-figred flex content-center"
                    href={url}
                    target="_blank"
                >
                    <Icon
                        class="inline mr-2 text-2xl"
                        icon={socialsMap[index].icon}
                    />
                    <span class="underline self-center"
                        >{socialsMap[index].name}</span
                    >
                </a>
            {/each}
        </div>
    </div>
</article>
