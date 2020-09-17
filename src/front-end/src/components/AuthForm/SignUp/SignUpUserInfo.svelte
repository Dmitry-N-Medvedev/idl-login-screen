<script>
  import Input from '../../Input.svelte';

  export let signupUserInfo;
</script>

<style>
  .SignUpUserInfo {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      '. suui-position-selector-title suui-position-control .'
      '. suui-date-of-birth suui-legal-guardian-email .'
      '. suui-first-name suui-last-name .'
      '. suui-user-name suui-email .'
      '. suui-password suui-repeat-password .'
      '. suui-city suui-localization .'
    ;
    grid-gap: 0.5vw;
    width: 100%;

    position: relative;
  }

  #suui-position-selector-title {
    grid-area: suui-position-selector-title;
  }

  #suui-position-control {
    grid-area: suui-position-control;
  }

  #suui-date-of-birth {
    grid-area: suui-date-of-birth;
  }

  #suui-legal-guardian-email {
    grid-area: suui-legal-guardian-email;
  }
  #suui-first-name {
    grid-area: suui-first-name;
  }
  #suui-last-name {
    grid-area: suui-last-name;
  }

  #suui-user-name {
    grid-area: suui-user-name;
  }

  #suui-email {
    grid-area: suui-email;
  }

  #suui-password {
    grid-area: suui-password;
  }

  #suui-repeat-password {
    grid-area: suui-repeat-password;
  }

  #suui-city {
    grid-area: suui-city;
  }

  #suui-localization {
    grid-area: suui-localization;
  }

  .suui-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>

{#if signupUserInfo}
<div class="SignUpUserInfo" {...$$restProps}>
  <div id="suui-position-selector-title" class="suui-cell">{signupUserInfo.position.title}</div>
  <div id="suui-position-control" class="suui-cell">
    {#each signupUserInfo.position.items as position }
      <Input type="radio" id="position-{position.value}" {...position} />
    {/each}
  </div>
  <div id="suui-date-of-birth" class="suui-cell">
    <Input type="date" {...signupUserInfo.bday} />
  </div>
  <div id="suui-legal-guardian-email" class="suui-cell">
    <Input type="email" {...signupUserInfo.guardianEmail} />
  </div>
  <div id="suui-first-name" class="suui-cell">
    <Input type="text" {...signupUserInfo.firstName} />
  </div>
  <div id="suui-last-name" class="suui-cell">
    <Input type="text" {...signupUserInfo.lastName} />
  </div>
  <div id="suui-user-name" class="suui-cell">
    <Input type="text" {...signupUserInfo.userName} />
  </div>
  <div id="suui-email" class="suui-cell">
    <Input type="email" {...signupUserInfo.email} />
  </div>
  <div id="suui-password" class="suui-cell">
    <Input type="password" {...signupUserInfo.password} />
  </div>
  <div id="suui-repeat-password" class="suui-cell">
    <Input type="password" {...signupUserInfo.repeatPassword} />
  </div>
  <div id="suui-city" class="suui-cell">
    <Input type="text" {...signupUserInfo.city} />
  </div>
  <div id="suui-localization" class="suui-cell">
    <Input type="select" {...signupUserInfo.localization} />
  </div>
</div>
{/if}