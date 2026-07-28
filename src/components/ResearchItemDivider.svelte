<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

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
