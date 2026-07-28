<script lang="ts">
    import _ from "lodash";

    import { onMount } from "svelte";

    import ResearchSearchBar from "@/components/ResearchSearchBar.svelte";

    import ResearchItem, {
        type Props as ResearchItemProps,
    } from "@/components/ResearchItem.svelte";

    import ResearchItemDivider from "@/components/ResearchItemDivider.svelte";

    interface Props {
        items: Array<ResearchItemProps>;
    }

    let { items }: Props = $props();

    let searchPhrase = $state("");
    let filteredItems = $state(Array());

    onMount(() => {
        filteredItems = _.shuffle(items);
    });

    $effect(() => {
        filteredItems = items.filter((item) => {
            return searchPhrase
                .toLowerCase()
                .trim()
                .split(" ")
                .some((search) =>
                    [
                        item.data.title,
                        item.data.venue,
                        item.data.year,
                        item.data.authors,
                        item.body,
                    ]
                        .join(" ")
                        .toLowerCase()
                        .includes(search),
                );
        });
    });
</script>

<ResearchSearchBar
    bind:searchPhrase
    numShow={filteredItems.length}
    numAll={items.length}
/>
<div
    class="relative overflow-y-scroll lg:overflow-y-hide lg:overflow-x-scroll scrollbar-none w-auto flex flex-row gap-8 px-4 py-8 lg:px-8 lg:flex-col border-t-4 border-b-4 lg:border-t-0 lg:border-b-0 lg:border-l-4 lg:border-r-4 lg:max-h-[60vh] border-figred lg:mx-16 border-dashed bg-white"
>
    {#each filteredItems as item, index}
        <div class="shrink-0 w-11/12 lg:w-full">
            <ResearchItem
                data={item.data}
                body={item.body}
                highlightItems={searchPhrase.trim().split(" ")}
            />
        </div>

        {#if index !== filteredItems.length - 1}
            <ResearchItemDivider />
        {/if}
    {/each}
    {#if filteredItems.length === 0}
        <span class="italic font-bold tracking-wide">
            no matching research found
        </span>
    {/if}
</div>
