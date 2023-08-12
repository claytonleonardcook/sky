<script lang="ts">
  type $$Props = {
    type: 'text' | 'password'
  } & Omit<Component<HTMLInputElement>, 'type'>;

    export let type: $$Props['type'];
    export let className: $$Props['className'] = '';
    export let placeholder: $$Props['placeholder'] = '';

    let value = '';
    let isFocused = false;
    let isInvalid = false;

    const handleFocus = () => isFocused = !isFocused;
    const handleInvalid = () => isInvalid = !isInvalid;
</script>

<fieldset 
    data-placeholder={placeholder} 
    data-isfocused={isFocused} 
    data-hasvalue={value != ''} 
    data-isinvalid={isInvalid}>
    {#if type === 'password'}
    <input 
        class={className} 
        type="password"
        on:focus={handleFocus} 
        on:blur={handleFocus} 
        on:invalid={handleInvalid} 
        bind:value={value} 
        {...$$restProps} 
    />
    {/if}
    {#if type === 'text'}
    <input 
        class={className} 
        type="text"
        on:focus={handleFocus} 
        on:blur={handleFocus} 
        on:invalid={handleInvalid} 
        bind:value={value} 
        {...$$restProps} 
    />
    {/if}
</fieldset>

<style lang="scss">
    @use 'sass:math';

    fieldset {
        position: relative;
        font-size: medium;
        padding-bottom: math.div($vr, 2);
        overflow-x: clip;
        overflow-y: visible;

        &::before {
            position: absolute;
            box-sizing: border-box;
            transform: translateY(60%);
            margin: 0 $hr;
            content: attr(data-placeholder);
            font-size: inherit;
            background-color: $background;
            outline: $background solid math.div($hr, 2);
            transition: 
                transform $transition-fast,
                font-size $transition-fast;
            z-index: -1;
        }

        > input {
            width: 100%;
            box-sizing: border-box;
            border: $text solid 1px;
            padding: $vr $hr;
            color: $text;
            border-radius: $corner;
            background-color: transparent;
            font-size: inherit;
            outline: none;
        }

        &[data-isfocused="true"],
        &[data-hasvalue="true"] {
            &::before {
                transform: translateY(-40%);
                font-size: small;
                color: $primary;
            }
            > input {
                border-color: $primary;
            }
        }

        &[data-isinvalid="true"]:not(&[data-isfocused="true"]):not(&[data-hasvalue="true"]) {
            &::before {
                color: $error;
            }
            > input {
                border-color: $error;
            }
        }

        &[data-hasvalue="true"] {
            > input {
                border-color: $primary;
            }
        }
    }
</style>
