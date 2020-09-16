<script>
  import CircularImageButton from './CircularImageButton.svelte';

  import FacebookIcon from '../../static/social-network-icons/facebook.svg';
  import GoogleIcon from '../../static/social-network-icons/google.svg';
  import AppleIcon from '../../static/social-network-icons/apple.svg';

  import Input from './Input.svelte';
</script>
<style>
  :root {
    --auth-form-background-color: hsl(0, 0%, 21%);
    --facebook-icon-fill-color: hsl(0, 0%, 100%);
    --google-icon-fill-color: hsl(0, 0%, 100%);
    --apple-icon-fill-color: hsl(0, 0%, 100%);
  }

  #auth-form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 5fr 2fr 2fr;
    grid-template-areas:
      'auth-tabs'
      'auth-social'
      'auth-or-devider'
      'auth-panel'
      'auth-checkboxes'
      'auth-button'
    ;

    background-color: var(--auth-form-background-color);
    width: 50vh;
    height: 50vh;

    color: white;
  }

  #tabs {
    grid-area: auth-tabs;
    display: flex;
    list-style-type: none;

    margin: 0;
    padding: 0;
  }

  #tabs > .tab {
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    color: white;

    pointer-events: all;
    cursor: pointer;
  }

  #auth-social {
    grid-area: auth-social;
  }

  #auth-social-caption {
    justify-content: center;
    align-items: center;
    display: flex;

    text-transform: capitalize;
    color: white;
  }

  #auth-social-networks {
    display: flex;
    justify-content: center;
    align-items: center;

    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .auth-social-network {
    display: flex;
    justify-content: center;

    color: white;
  }

  #auth-social-networks > .auth-social-network:first-of-type {
    justify-content: flex-end;
    margin-right: 0.5vw;
  }

  #auth-social-networks > .auth-social-network:last-of-type {
    justify-content: flex-start;
    margin-left: 0.5vw;
  }

  #auth-or-devider {
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
  }

  #auth-panel {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas:
      '. position-selector-title position-control .'
      '. date-of-birth legal-guardian-email .'
      '. first-name last-name .'
      '. user-name email .'
      '. password repeat-password .'
      '. city localization .'
      '. terms terms .'
      '. marketing marketing .'
    ;
    grid-gap: 0.5vw;
  }

  #position-selector-title {
    grid-area: position-selector-title;
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  #position-control {
    grid-area: position-control;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #date-of-birth {
    grid-area: date-of-birth;
  }

  #legal-guardian-email {
    grid-area: legal-guardian-email;
  }

  #first-name {
    grid-area: first-name;
  }

  #last-name {
    grid-area: last-name;
  }

  #user-name {
    grid-area: user-name;
  }

  #email {
    grid-area: email;
  }

  #password {
    grid-area: password;
  }

  #repeat-password {
    grid-area: repeat-password;
  }

  #city {
    grid-area: city;
  }

  #localization {
    grid-area: localization;
  }

  #terms {
    grid-area: terms;
  }

  #marketing {
    grid-area: marketing;
  }
</style>

<form id="auth-form">
  <ul id="tabs">
    <li class="tab">login</li>
    <li class="tab">sign up</li>
  </ul>
  <div id="auth-social">
    <div id="auth-social-caption">sign up by using</div>
    <ul id="auth-social-networks">
      <li class="auth-social-network">
        <CircularImageButton>
          <FacebookIcon width="0.75vw" fill="var(--facebook-icon-fill-color)" />
        </CircularImageButton>
      </li>
      <li class="auth-social-network">
        <CircularImageButton>
          <GoogleIcon width="0.75vw" fill="var(--google-icon-fill-color)" />
        </CircularImageButton>
      </li>
      <li class="auth-social-network">
        <CircularImageButton>
          <AppleIcon width="0.75vw" fill="var(--apple-icon-fill-color)" />
        </CircularImageButton>
      </li>
    </ul>
  </div>
  <div id="auth-or-devider">or</div>
  <div id="auth-panel">
    <div id="position-selector-title">what is your position?</div>
    <div id="position-control">
      <Input type="radio" id="position-coach" name="position" value="coach" label="coach" checked />
      <Input type="radio" id="position-player" name="position" value="player" label="player" />
    </div>
    <div id="date-of-birth">
      <Input type="date" name="date-of-birth" placeholder="date of birth" />
    </div>
    <div id="legal-guardian-email">
      <Input type="email" name="legal-guardian-email" placeholder="legal guardian e-mail" />
    </div>
    <div id="first-name">
      <Input type="text" name="first-name" placeholder="first name" />
    </div>
    <div id="last-name">
      <Input type="text" name="last-name" placeholder="last name" />
    </div>
    <div id="user-name">
      <Input type="text" name="user-name" placeholder="user name" />
    </div>
    <div id="email">
      <Input type="email" name="email" placeholder="e-mail" />
    </div>
    <div id="password">
      <Input type="password" name="password" placeholder="password" />
    </div>
    <div id="repeat-password">
      <Input type="password" name="repeat-password" placeholder="repeat password" />
    </div>
    <div id="city">
      <Input type="text" name="city" placeholder="city" />
    </div>
    <div id="localization">
      <Input type="select" name="localization" options="de,en" autocomplete />
    </div>
    <div id="terms">
      <Input type="checkbox" name="terms" placeholder="I read and agree to <a href='https://google.com' target='_blank'>Terms & Conditions</a>" />
    </div>
    <div id="marketing">
      <Input type="checkbox" name="marketing" placeholder="I'd like to get marketing promotions, special offers from KickID" checked />
    </div>
  </div>
</form>