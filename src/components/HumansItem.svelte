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
    class="relative flex flex-col gap-6 bg-white p-8 border-b-4 border-figred w-auto lg:max-w-md"
>
    <header class="w-64 h-64">
        <img class="w-full h-auto" src={data.picture.src} alt={data.name} />
    </header>
    <section>
        <h3 class="font-bold text-2xl mb-1.5">{data.name}</h3>
        <div class="text-sm mb-4 text-pretty leading-6">
            {@html marked.parse(body)}
        </div>
    </section>
    <footer class="flex gap-2">
        {#each [data.website, data.research] as url, index}
            <a
                class="text-figred flex content-center text-sm"
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
    </footer>
</article>
