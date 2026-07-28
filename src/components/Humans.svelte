<script lang="ts">
    import _ from "lodash";

    import HumansItem, {
        type Props as HumanItemProps,
    } from "@/components/HumansItem.svelte";

    interface Props {
        items: Array<HumanItemProps>;
    }

    let { items }: Props = $props();
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
    {#each items as item, index}
        <HumansItem data={item.data} body={item.body} />
    {/each}
</div>
