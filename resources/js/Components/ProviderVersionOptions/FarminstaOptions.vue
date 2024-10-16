<script setup>
import Select from "@/Components/Form/Select.vue";
import Input from "@/Components/Form/Input.vue";
import ProviderOptionWrap from "@/Components/ProviderVersionOptions/ProviderOptionWrap.vue";
import Label from "../Form/Label.vue";

defineProps(['options'])
</script>
<template>
    <ProviderOptionWrap :title="$t('service.provider_options', {provider: 'YouTube'})" provider="youtube">
        <div>
            <div class="w-full mb-xs">
                <Input v-model="options.title" type="text" placeholder="Reel Title" id="farminsta_title"/>
            </div>

            <div class="w-full mb-xs">
                <Input v-model="options.description" type="text" placeholder="Reel Description" id="farminsta_description"/>
            </div>

            <div class="w-full">
                <Label for="category">{{ 'Category' }}</Label>
                <Select v-model="options.category_id" id="category">
                    <option value="1">Awareness & Advisory</option>
                    <option value="2">Agro Entrepreneurship</option>
                    <option value="3">News & Trends</option>
                    <option value="4">Schemes & Offers</option>
                    <option value="5">Product Promotion</option>
                    <option value="6">Entertainment</option>
                    <option value="7">New technologies</option>
                </Select>
            </div>

            <div class="w-full">
                <Label for="language">{{ 'Language' }}</Label>
                <Select v-model="options.language" id="language">
                    <option value="en_in">{{ 'English' }}</option>
                    <option value="hi_in">{{ 'Hindi' }}</option>
                    <option value="ta_in">{{ 'Tamil' }}</option>
                    <option value="te_in">{{ 'Telugu' }}</option>
                </Select>
            </div>

        </div>
    </ProviderOptionWrap>
</template>
