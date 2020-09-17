<script>
  import Input from '../../Input.svelte';

  export let signupUserInfo;

  $: if (signupUserInfo) {
    console.debug('signupUserInfo:', signupUserInfo);
  }
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

<div class="SignUpUserInfo" {...$$restProps}>
  <div id="suui-position-selector-title" class="suui-cell">What is your position?</div>
  <div id="suui-position-control" class="suui-cell">
    <Input type="radio" id="position-coach" name="position" value="coach" label="coach" checked />
    <Input type="radio" id="position-player" name="position" value="player" label="player" />
  </div>
  <div id="suui-date-of-birth" class="suui-cell">
    <Input type="date" name="date-of-birth" placeholder="date of birth" autocomplete="bday" />
  </div>
  <div id="suui-legal-guardian-email" class="suui-cell">
    <Input type="email" name="legal-guardian-email" placeholder="legal guardian e-mail" />
  </div>
  <div id="suui-first-name" class="suui-cell">
    <Input type="text" name="first-name" placeholder="first name" autocomplete="given-name" />
  </div>
  <div id="suui-last-name" class="suui-cell">
    <Input type="text" name="last-name" placeholder="last name" autocomplete="family-name" />
  </div>
  <div id="suui-user-name" class="suui-cell">
    <Input type="text" name="user-name" placeholder="user name" autocomplete="username" />
  </div>
  <div id="suui-email" class="suui-cell">
    <Input type="email" name="email" placeholder="e-mail" autocomplete="email" />
  </div>
  <div id="suui-password" class="suui-cell">
    <Input type="password" name="password" placeholder="password" autocomplete="new-password" />
  </div>
  <div id="suui-repeat-password" class="suui-cell">
    <Input type="password" name="repeat-password" placeholder="repeat password" autocomplete="new-password" />
  </div>
  <div id="suui-city" class="suui-cell">
    <Input type="text" name="city" placeholder="city" autocomplete="address-level2" />
  </div>
  <div id="suui-localization" class="suui-cell">
    <Input type="select" name="localization" options="de,en"/>
  </div>
</div>