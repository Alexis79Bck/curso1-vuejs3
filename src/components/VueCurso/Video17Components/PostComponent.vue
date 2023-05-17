<template>
    <div class="card has-background-info-dark sombra-box">
        <header class="card-header has-background-grey-light">
            <p class="card-header-title is-5 has-text-dark">Post Id. {{ post.id }} | {{ post.title }}</p>
        </header>
        <article class="card-content has-text-light">
            <div class="block">
                {{ post.body }}
            </div>
        </article>
    </div>
</template>

<script setup>
defineProps(['post'])
</script>

