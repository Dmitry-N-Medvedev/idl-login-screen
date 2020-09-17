<script>
  import CircularImageButton from '../../CircularImageButton.svelte';

  import FacebookIcon from '../../../../static/social-network-icons/facebook.svg';
  import GoogleIcon from '../../../../static/social-network-icons/google.svg';
  import AppleIcon from '../../../../static/social-network-icons/apple.svg';
</script>

<style>
  .SignUpSocial {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
      'sign-up-social-title'
      'sign-up-social-buttons'
    ;

    position: relative;
    width: 100%;
  }

  #sign-up-social-title {
    grid-area: sign-up-social-title;

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: capitalize;
  }

  #sign-up-social-buttons {
    grid-area: sign-up-social-buttons;

    display: grid;
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: 1fr;
    grid-template-areas:
      'facebook-button google-button apple-button'
    ;
    grid-gap: 0.5vw;
    justify-content: center;
  }

  #facebook-button {
    grid-area: facebook-button;
  }

  #google-button {
    grid-area: google-button;
  }

  #apple-button {
    grid-area: apple-button;
  }

  .social-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
  }

  .social-button:first-of-type {
    justify-content: flex-end;
  }

  .social-button:last-of-type {
    justify-content: flex-start;
  }
</style>

<div class="SignUpSocial" {...$$restProps}>
  <div id="sign-up-social-title">
    {$$restProps['title'] ?? 'N/A'}
  </div>
  <div id="sign-up-social-buttons">
    <div id="facebook-button" class="social-button">
      <CircularImageButton>
        <FacebookIcon width="0.75vw" fill="var(--facebook-icon-fill-color)" />
      </CircularImageButton>
    </div>

    <div id="google-button" class="social-button">
      <CircularImageButton>
        <GoogleIcon width="0.75vw" fill="var(--facebook-icon-fill-color)" />
      </CircularImageButton>
    </div>

    <div id="apple-button" class="social-button">
      <CircularImageButton>
        <AppleIcon width="0.75vw" fill="var(--facebook-icon-fill-color)" />
      </CircularImageButton>
    </div>
  </div>
</div>