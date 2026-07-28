<script lang="ts">
    import _ from "lodash";

    import { onMount } from "svelte";

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

<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
    {#each shuffledItems as item, _}
        <HumansItem data={item.data} body={item.body} />
    {/each}
</div>
