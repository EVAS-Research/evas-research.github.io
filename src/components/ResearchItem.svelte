<script lang="ts">
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
    }

    let { data, body }: Props = $props();
</script>

<article class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
    <div class="col-span-2">
        <h3 class="mb-2 lg:text-lg">
            <span>{data.authors}</span>&nbsp;
            <span class="opacity-60">({data.year}).</span>&nbsp;
            <span class="font-bold">{data.title}.</span>&nbsp;
            <span class="text-sm lg:text-base italic font-light"
                >{data.venue}</span
            >
        </h3>
        <section class="text-sm">
            {body}
        </section>
    </div>
    <footer class="text-sm font-bold">
        <a
            class="text-figred flex content-center"
            href={data.url}
            target="_blank"
        >
            <Icon class="inline mr-2 text-2xl" icon="tdesign:link" />
            <span class="underline self-center">{data.url}</span>
        </a>
    </footer>
</article>
