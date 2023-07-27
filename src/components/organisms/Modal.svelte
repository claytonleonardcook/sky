<script lang="ts">
  export let isOpen: boolean = false;
  export let slideDirection:
    | 'top-in'
    | 'right-in'
    | 'bottom-in'
    | 'left-in'
    | 'blur-in'
    | 'fade-in' = 'top-in';
</script>

<dialog class="modal" open={isOpen} data-slide-direction={slideDirection}>
  <section>
    <slot />
  </section>
</dialog>

<style lang="scss">
  @keyframes blurIn {
    from {
      filter: blur(2rem);
    }
    to {
      filter: blur(0);
    }
  }

  @keyframes fadeIn {
    from {
      filter: opacity(0%);
    }
    to {
      filter: opacity(100%);
    }
  }

  @keyframes topSlideIn {
    from {
      top: -100%;
    }
    to {
      top: 0;
    }
  }

  @keyframes bottomSlideIn {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }

  @keyframes leftSlideIn {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }

  @keyframes rightSlideIn {
    from {
      right: -100%;
    }
    to {
      right: 0;
    }
  }

  .modal {
    align-items: center;
    justify-content: center;
    border: none;
    height: 100vh;
    width: 100vw;
    background: #6b6b6baa;
    backdrop-filter: blur(10px);
    padding: 0;

    section {
      position: relative;
    }

    &[data-slide-direction='blur-in'] {
      section {
        animation: blurIn 1s linear;
      }
    }

    &[data-slide-direction='fade-in'] {
      section {
        animation: fadeIn 1s linear;
      }
    }

    &[data-slide-direction='top-in'] {
      section {
        animation: topSlideIn 1s linear;
      }
    }

    &[data-slide-direction='bottom-in'] {
      section {
        animation: bottomSlideIn 1s linear;
      }
    }

    &[data-slide-direction='left-in'] {
      section {
        animation: leftSlideIn 1s linear;
      }
    }

    &[data-slide-direction='right-in'] {
      section {
        animation: rightSlideIn 1s linear;
      }
    }

    &[open] {
      display: flex;
    }
  }
</style>
