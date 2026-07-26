<script lang="ts">
    import Icon from "@iconify/svelte";

    import ResearchItem, {
        type Props as ResearchItemProps,
    } from "@/components/ResearchItem.svelte";

    interface Props {
        items: Array<ResearchItemProps>;
    }

    let { items }: Props = $props();

    let searchPhrase = $state("");
    let filteredItems = $derived(items);

    function search() {
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
    }
</script>

<div class="flex gap-2 flex-col">
    <div class="flex gap-2 md:gap-4 items-center max-w-3xl">
        <label for="search">
            <Icon icon="tdesign:search" class="text-figred text-3xl" />
        </label>
        <input
            id="search"
            type="text"
            bind:value={searchPhrase}
            oninput={search}
            class="border-3 border-figred py-2 px-4 w-full focus:outline-none"
            placeholder="search for authors or keywords"
        />
        <button>
            <Icon
                icon="tdesign:filter-clear"
                class="text-figred text-3xl cursor-pointer"
                onclick={() => ((searchPhrase = ""), search())}
            />
        </button>
    </div>
    <div>
        <span class="text-sm italic">
            Showing {filteredItems.length} out of {items.length}
        </span>
    </div>
</div>
<div class="grid grid-cols-1 gap-8">
    {#each filteredItems as item}
        <ResearchItem data={item.data} body={item.body} />
    {/each}
</div>
