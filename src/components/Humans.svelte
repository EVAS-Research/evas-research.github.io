<script lang="ts">
    import _ from "lodash";

    import { onMount } from "svelte";

    import Icon from "@iconify/svelte";

    import HumansItem, {
        type Props as HumanItemProps,
    } from "@/components/HumansItem.svelte";

    interface Props {
        items: Array<HumanItemProps>;
    }

    let { items }: Props = $props();

    let shuffledItems = $derived(items);

    onMount(() => {
        shuffledItems = _.shuffle(shuffledItems);
    });
</script>

<div
    class="relative overflow-y-scroll scrollbar-none w-auto flex flex-row gap-8 items-start"
>
    {#each shuffledItems as item, index}
        <HumansItem data={item.data} body={item.body} />
        {#if index !== shuffledItems.length - 1}
            <div class="relative">
                <div class="absolute">
                    <Icon
                        icon="tdesign:plus"
                        class="text-figred text-5xl left-0 top-1/2 -translate-x-1/2 translate-y-1/2 animate-pulse"
                    />
                </div>
            </div>
        {/if}
    {/each}
</div>
