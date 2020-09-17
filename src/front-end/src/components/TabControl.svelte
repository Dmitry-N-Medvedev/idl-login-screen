<script>
  import {
    generateComponentId,
  } from './helpers/generateComponentId.mjs';

  export let contents;

  $: if (contents) {
    contents = contents.map((content) => ({
      id: generateComponentId(5),
      ...content,
    }));
  }

  const generateTabButtonId = (currentId) => `${currentId}-tabButton`;
  const generateTabPanelId = (currentId) => `${currentId}-tabPanel`;
  const handleTabButtonClick = (contentId) => {
    const tabPanelId = generateTabPanelId(contentId);

    contents = contents.map((content) => {
      content.active = content.id === contentId;

      return content;
    });
  };

  const radioGroupName = generateComponentId(5);
</script>

<style>
  :root {
    --auth-form-background-color: hsl(210, 5%, 17%);
    --auth-form-active-background-color: hsl(210, 5%, 25%);
    --facebook-icon-fill-color: hsl(0, 0%, 100%);
    --google-icon-fill-color: hsl(0, 0%, 100%);
    --apple-icon-fill-color: hsl(0, 0%, 100%);
    --border-radius: 3vh;
  }

  .tabControlContainer {
    display: grid;
    grid-template-columns: 0.125fr 1fr 0.125fr;
    grid-template-rows: 0.125fr 1fr 9fr 0.125fr;
    grid-template-areas:
      '. . .'
      '. tabButtonsContainer .'
      '. tabContentsContainer .'
      '. . .'
    ;

    background-color: transparent;
    width: 50vh;
    height: 50vh;

    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);

    position: relative;
  }

  .tabButtonsContainer {
    grid-area: tabButtonsContainer;
    display: flex;
    flex: 1 0 auto;
    justify-content: stretch;
    align-items: center;

    position: relative;
  }

  .tabButton {
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
    height: 100%;

    position: relative;
  }

  .hiddenRadio {
    display: none;
  }

  .tabTitle {
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    justify-content: center;
    align-items: center;

    background-color: var(--auth-form-background-color);
    /* border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius); */

    position: relative;
  }

  .tabButton .hiddenRadio:checked ~ .tabTitle {
    background-color: var(--auth-form-active-background-color);
  }

  .tabContentsContainer {
    grid-area: tabContentsContainer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .tabContentContainer,
  .tabContentContainerBack {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

  }
  
  .tabContentContainerBack {
    background-color: var(--auth-form-background-color);
  }
  
  .tabContentContainer {
    z-index: -1;

    /* padding: 1.5vh 1vw; */
  }
  
  .tabContentVisible {
    z-index: 1;
    pointer-events: all;

    /* border-top-left-radius: var(--border-radius); */
    /* border-top-right-radius: var(--border-radius); */

    background-color: var(--auth-form-active-background-color);
  }
</style>

<article {...$$props} {...$$restProps} class="tabControlContainer">
  <section class="tabButtonsContainer">
    {#each contents as content}
      <div class="tabButton">
        <input id={generateTabButtonId(content.id)} type="radio" name={radioGroupName} class="hiddenRadio" checked={content.active} />
        <label for={generateTabButtonId(content.id)} class="tabTitle" on:click={handleTabButtonClick(content.id)}>{content.title}</label>
      </div>
    {/each}
  </section>

  <section class="tabContentsContainer">
    {#each contents as content}
    <div class="tabContentContainerBack"></div>
      <div id={generateTabPanelId(content.id)} class="tabContentContainer" class:tabContentVisible={content.active}>
        <svelte:component this={content.component} />
      </div>
    {/each}
  </section>
</article>