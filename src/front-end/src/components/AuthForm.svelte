<script>
  import TabControl from './TabControl.svelte';
  import LoginPanel from './AuthForm/LoginPanel.svelte';
  import SignUpPanel from './AuthForm/SignUpPanel.svelte';

  const tabContents = [
    {
      title: 'login',
      component: LoginPanel,
      active: false,
    },
    {
      title: 'sign up',
      component: SignUpPanel,
      active: true,
    },
  ];
</script>

<TabControl contents={tabContents} />
