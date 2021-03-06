<script>
  import { onMount, onDestroy } from 'svelte';
  import {
    BroadcastChannelNames,
  } from '../../../constants/BroadcastChannelNames.mjs';
  import {
    SignUpProtocolMessages,
  } from '../../../constants/SignUpProtocolMessages.mjs';
  import Input from '../../Input.svelte';
  import PositionSelector from './PositionSelector.svelte';

  export let signupUserInfo;

  let userInfoFieldChangeBroadcastChannel;
  let postponedMessages = [];

  const handleFieldChange = ({ key, event }) => {
    const message = SignUpProtocolMessages.FieldValueChanged({ key, payload: event.detail.payload });

    if (userInfoFieldChangeBroadcastChannel) {
      userInfoFieldChangeBroadcastChannel.postMessage(message);
    } else {
      postponedMessages.push(message);
    }
  };

  onMount(() => {
    userInfoFieldChangeBroadcastChannel = new BroadcastChannel(BroadcastChannelNames.UserInfoFieldChangeBroadcastChannel);

    while (postponedMessages.length > 0) {
      userInfoFieldChangeBroadcastChannel.postMessage(postponedMessages.shift());
    }

  });

  onDestroy(() => {
    if (userInfoFieldChangeBroadcastChannel) {
      userInfoFieldChangeBroadcastChannel.close();

      userInfoFieldChangeBroadcastChannel = undefined;
    }
  });
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
    <PositionSelector positions={signupUserInfo.position.items} on:message={(event) => handleFieldChange({ key: 'position', event})} />
  </div>
  <div id="suui-date-of-birth" class="suui-cell">
    <Input type="date" {...signupUserInfo.bday} on:message={(event) => handleFieldChange({ key: 'bday', event})} />
  </div>
  <div id="suui-legal-guardian-email" class="suui-cell">
    <Input type="email" {...signupUserInfo.guardianEmail} on:message={(event) => handleFieldChange({ key: 'guardianEmail', event})} />
  </div>
  <div id="suui-first-name" class="suui-cell">
    <Input type="text" {...signupUserInfo.firstName} on:message={(event) => handleFieldChange({ key: 'firstName', event})} />
  </div>
  <div id="suui-last-name" class="suui-cell">
    <Input type="text" {...signupUserInfo.lastName} on:message={(event) => handleFieldChange({ key: 'lastName', event})} />
  </div>
  <div id="suui-user-name" class="suui-cell">
    <Input type="text" {...signupUserInfo.userName} on:message={(event) => handleFieldChange({ key: 'userName', event})} />
  </div>
  <div id="suui-email" class="suui-cell">
    <Input type="email" {...signupUserInfo.email} on:message={(event) => handleFieldChange({ key: 'email', event})} />
  </div>
  <div id="suui-password" class="suui-cell">
    <Input type="password" {...signupUserInfo.password} on:message={(event) => handleFieldChange({ key: 'password', event})} />
  </div>
  <div id="suui-repeat-password" class="suui-cell">
    <Input type="password" {...signupUserInfo.repeatPassword} on:message={(event) => handleFieldChange({ key: 'repeatPassword', event})} />
  </div>
  <div id="suui-city" class="suui-cell">
    <Input type="text" {...signupUserInfo.city} on:message={(event) => handleFieldChange({ key: 'city', event})} />
  </div>
  <div id="suui-localization" class="suui-cell">
    <Input type="select" {...signupUserInfo.localization} on:message={(event) => handleFieldChange({ key: 'localization', event})} />
  </div>
</div>
{/if}