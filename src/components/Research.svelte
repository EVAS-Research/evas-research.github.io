<script lang="ts">
    import _ from "lodash";

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

<div class="flex gap-2 flex-col bg-white p-4 pb-3 md:p-8 md:pb-5 max-w-3xl">
    <div class="flex gap-2 md:gap-4 items-center">
        <label for="search">
            <Icon
                icon="tdesign:search"
                class="text-figred text-3xl cursor-pointer {searchPhrase.length >
                0
                    ? 'animate-pulse'
                    : ''}"
            />
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
            showing {filteredItems.length} out of {items.length}
        </span>
    </div>
</div>
<div
    class="relative overflow-y-scroll lg:overflow-y-hide lg:overflow-x-scroll scrollbar-none w-auto flex flex-row gap-8 px-4 py-8 lg:px-8 lg:flex-col lg:h-100vh border-t-4 border-b-4 lg:border-t-0 lg:border-b-0 lg:border-l-4 lg:border-r-4 lg:max-h-[60vh] border-figred lg:mx-16 border-dashed bg-white"
>
    {#each _.shuffle(filteredItems) as item, index}
        <div class="shrink-0 w-11/12 lg:w-full">
            <ResearchItem data={item.data} body={item.body} />
        </div>

        {#if index !== filteredItems.length - 1}
            <div class="relative">
                <div
                    class="absolute flex flex-col lg:flex-row justify-between lg:justify-around text-figred text-5xl animate-pulse w-full h-full -ml-2"
                >
                    <Icon
                        icon="tdesign:chevron-down"
                        class="hidden lg:block -translate-y-6 -translate-x-6"
                    />
                    <Icon
                        icon="tdesign:chevron-down"
                        class="hidden lg:block -translate-y-6 translate-x-6"
                    />
                    <Icon
                        icon="tdesign:chevron-right"
                        class="lg:hidden left-0 -translate-y-4 -translate-x-1/2"
                    />
                    <Icon
                        icon="tdesign:chevron-right"
                        class="lg:hidden translate-y-4 -translate-x-1/2"
                    />
                </div>
            </div>
        {/if}
    {/each}
    {#if filteredItems.length === 0}
        <span class="italic font-bold tracking-wide">
            no matching research found
        </span>
    {/if}
</div>
