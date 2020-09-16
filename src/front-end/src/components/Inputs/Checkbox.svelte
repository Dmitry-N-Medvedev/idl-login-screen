<script>
import AuthForm from "../AuthForm.svelte";
import CircularImageButton from "../CircularImageButton.svelte";

</script>
<input type="checkbox" {...$$props} {...$$restProps} />
<label for={$$restProps['id']}>some checkbox</label>