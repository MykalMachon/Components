<script>
  export let id;
  export let name;
  export let label;

  let query = ''

  const options = [
    {title: 'Option One', description: 'This is the description for option one'},
    {title: 'Option Two', description: 'This is the description for option two'},
    {title: 'Option Three', description: 'This is the description for option three'},
  ]
</script>


<div class="form_control">
  <label class="select_label" for={id}>{label}</label>
  <input class="select_input" bind:value={query} type="text" placeholder="search by name or email" id={id} name={name} />
</div>
<ul class="select_options">
  {#if query != ''}
    {#each options as {title, description}}
      {#if title.includes(query)}
        <li tabindex="0">
          <strong>{title}</strong>
          <p>{description}</p>
          <p>Matches? </p>
        </li>
      {/if}
    {/each}
  {/if}
</ul>

<style>
  .form_control{
    display: flex;
    flex-direction: column;
  }
</style>