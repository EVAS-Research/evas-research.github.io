<script lang="ts">
    import Icon from "@iconify/svelte";

    interface Props {
        searchPhrase: string;
        numShow: number;
        numAll: number;
    }

    let {
        searchPhrase = $bindable(),
        numShow = 0,
        numAll = 0,
    }: Props = $props();
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
            class="border-3 border-figred py-2 px-4 w-full focus:outline-none"
            placeholder="search for authors or keywords"
        />
        <button>
            <Icon
                icon="tdesign:filter-clear"
                class="text-figred text-3xl cursor-pointer"
                onclick={() => (searchPhrase = "")}
            />
        </button>
    </div>
    <div>
        <span class="text-sm italic">
            showing {numShow} out of {numAll}
        </span>
    </div>
</div>
