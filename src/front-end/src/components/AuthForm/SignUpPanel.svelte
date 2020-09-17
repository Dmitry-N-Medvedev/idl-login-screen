<script>
  import SignUpSocial from './SignUp/SignUpSocial.svelte';
  import SignUpOrDevider from './SignUp/SignUpOrDevider.svelte';
  import SignUpUserInfo from './SignUp/SignUpUserInfo.svelte';
  import SignUpOptions from './SignUp/SignUpOptions.svelte';
  import SignUpButton from './SignUp/SignUpButton.svelte';

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.debug('handleSignUpSubmit', event);
  };
</script>

<style>
  #sign-up-screen {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 5fr 1fr 1fr;
    grid-template-areas:
      'sign-up-social'
      'sign-up-or-devider'
      'sign-up-userinfo'
      'sign-up-options'
      'sign-up-button'
    ;
    grid-gap: 1.25vh;

    width: 100%;
    height: 100%;

    position: relative;
  }

  .sign-up-general-section {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex: 1 0 auto;

    position: relative;
  }

  #sign-up-social {
    grid-area: sign-up-social;
  }

  #sign-up-or-devider {
    grid-area: sign-up-or-devider;
  }

  #sign-up-userinfo {
    grid-area: sign-up-userinfo;
  }

  #sign-up-options {
    grid-area: sign-up-options;
  }

  #sign-up-button {
    grid-area: sign-up-button;
  }
</style>

<form id="sign-up-screen" on:submit={handleSignUpSubmit}>
  <div id="sign-up-social" class="sign-up-general-section">
    <SignUpSocial title="sign up by using" />
  </div>
  <div id="sign-up-or-devider" class="sign-up-general-section">
    <SignUpOrDevider title="or" />
  </div>
  <div id="sign-up-userinfo" class="sign-up-general-section">
    <SignUpUserInfo />
  </div>
  <div id="sign-up-options" class="sign-up-general-section">
    <SignUpOptions />
  </div>
  <div id="sign-up-button" class="sign-up-general-section">
    <SignUpButton />
  </div>
</form>