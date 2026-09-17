<template>
    <Teleport to="body">
        <Transition name="dialog-fade">
            <div v-if="modelValue" class="dialog-backdrop" role="presentation" @click.self="close">
                <section class="consult-dialog" role="dialog" aria-modal="true" aria-labelledby="consult-dialog-title">
                    <button class="dialog-close" type="button" aria-label="关闭预约咨询" @click="close">×</button>
                    <div class="dialog-header">
                        <p class="eyebrow">BOOK A CONSULTATION</p>
                        <h2 id="consult-dialog-title">预约咨询</h2>
                        <p>留下信息，我们会尽快与您联系，了解孩子的学习目标与规划需求。</p>
                    </div>
                    <form class="consult-form" @submit.prevent="submitForm">
                        <label class="field-label" for="consult-name">姓名</label>
                        <input id="consult-name" v-model.trim="form.name" class="text-input" type="text"
                            placeholder="请输入您的姓名" required />

                        <label class="field-label" for="consult-phone">联系电话</label>
                        <input id="consult-phone" v-model.trim="form.phone" class="text-input" type="tel"
                            placeholder="请输入手机号码" required />

                        <fieldset class="interest-fieldset">
                            <legend class="field-label">感兴趣的内容</legend>
                            <div class="checkbox-grid">
                                <label v-for="option in interestOptions" :key="option" class="checkbox-label">
                                    <input v-model="form.interests" type="checkbox" :value="option" />
                                    <span class="checkbox-box" aria-hidden="true"></span>
                                    <span>{{ option }}</span>
                                </label>
                            </div>
                        </fieldset>

                        <p v-if="submitted" class="submit-message" role="status">信息已提交，我们会尽快与您联系。</p>
                        <button class="submit-button" type="submit">提交预约 <span>→</span></button>
                    </form>
                </section>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';

defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ (event: 'update:modelValue', value: boolean): void }>();

const interestOptions = ['英文素养课程', '夏校冬令营', '等级考试', '新加坡公立留学'];
const submitted = ref(false);
const form = reactive({ name: '', phone: '', interests: [] as string[] });

const close = () => {
    emit('update:modelValue', false);
};

const submitForm = () => {
    Object.assign(form, { name: '', phone: '', interests: [] });
    submitted.value = true;
};

watch(() => submitted.value, (value) => {
    if (value) {
        window.setTimeout(() => {
            submitted.value = false;
            close();
        }, 1800);
    }
});
</script>

<style scoped lang="scss">
.dialog-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: rgba(5, 22, 36, 0.68);
    backdrop-filter: blur(8px);
}

.consult-dialog {
    position: relative;
    width: min(520px, 100%);
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
    padding: clamp(2rem, 5vw, 3rem);
    color: var(--brand-navy);
    background: var(--brand-ivory);
    border: 1px solid rgba(255, 255, 255, 0.45);
    box-shadow: 0 28px 80px rgba(1, 15, 26, 0.35);
}

.dialog-close {
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    width: 2rem;
    height: 2rem;
    color: var(--brand-navy);
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1;
    background: transparent;
    border: 0;
    cursor: pointer;
}

.eyebrow {
    color: var(--brand-blue);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.dialog-header h2 {
    margin-top: 0.6rem;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 500;
    letter-spacing: -0.04em;
}

.dialog-header>p:last-child {
    margin-top: 0.8rem;
    color: var(--brand-copy);
    font-size: 0.88rem;
    line-height: 1.7;
}

.consult-form {
    display: grid;
    gap: 0.65rem;
    margin-top: 2rem;
}

.field-label {
    color: var(--brand-navy);
    font-size: 0.82rem;
    font-weight: 700;
}

.text-input {
    width: 100%;
    margin-bottom: 0.7rem;
    padding: 0.85rem 0.9rem;
    color: var(--brand-navy);
    font: inherit;
    background: #fff;
    border: 1px solid rgba(13, 41, 66, 0.16);
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.text-input:focus {
    border-color: var(--brand-blue);
    box-shadow: 0 0 0 3px rgba(35, 102, 168, 0.12);
}

.interest-fieldset {
    padding: 0;
    border: 0;
}

.checkbox-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.7rem;
    margin-top: 0.35rem;
}

.checkbox-label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.55rem;
    min-height: 2.8rem;
    padding: 0.6rem 0.7rem;
    color: var(--brand-copy);
    font-size: 0.82rem;
    background: #fff;
    border: 1px solid rgba(13, 41, 66, 0.1);
    cursor: pointer;
}

.checkbox-label input {
    position: absolute;
    opacity: 0;
}

.checkbox-box {
    display: grid;
    place-items: center;
    width: 1.1rem;
    height: 1.1rem;
    flex: 0 0 auto;
    border: 1px solid rgba(13, 41, 66, 0.3);
    transition: background 0.2s ease, border-color 0.2s ease;
}

.checkbox-label input:checked+.checkbox-box {
    background: var(--brand-blue);
    border-color: var(--brand-blue);
}

.checkbox-label input:checked+.checkbox-box::after {
    content: '✓';
    color: #fff;
    font-size: 0.7rem;
}

.submit-message {
    color: #2f806c;
    font-size: 0.8rem;
}

.submit-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.8rem;
    padding: 0.9rem 1.2rem;
    color: var(--brand-navy);
    font: inherit;
    font-size: 0.88rem;
    font-weight: 700;
    background: var(--brand-gold);
    border: 0;
    border-radius: 999px;
    cursor: pointer;
}

.submit-button:hover {
    background: var(--brand-gold-light, #efc47d);
}

.submit-button span {
    font-size: 1.2rem;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
    transition: opacity 0.2s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
    opacity: 0;
}

@media (max-width: 480px) {
    .checkbox-grid {
        grid-template-columns: 1fr;
    }
}
</style>
