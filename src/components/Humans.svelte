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
    class="relative overflow-y-scroll lg:overflow-y-hide lg:overflow-x-scroll scrollbar-none w-auto flex flex-row gap-8"
>
    {#each shuffledItems as item, _}
        <HumansItem data={item.data} body={item.body} />
        <div class="relative">
            <div class="absolute">
                <Icon
                    icon="tdesign:plus"
                    class="text-figred text-5xl left-0 top-1/2 -translate-x-1/2 translate-y-1/2"
                />
            </div>
        </div>
    {/each}
</div>
