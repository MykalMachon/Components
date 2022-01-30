<script>
  export let id;
  export let name;
  export let label;
	export let options = [];
	let selectedOptions = [];
  let query = ''
	
	let inputEl;
	
	const handleSelection = (event) => {
		if(event.target.dataset.idx){
			const selectedUser = options.splice(event.target.dataset.idx, 1)[0];
			selectedOptions = [...selectedOptions, selectedUser]
		} else {
			console.log('this is a custom user')
			const customUser = {title: query, description: ''};
			selectedOptions = [...selectedOptions, customUser]
		}
		query = ''
		inputEl.focus()
	}
	
	const handleClick = (event) => {
		handleSelection(event);
	}
	
	const handleKeypress = (event) => {
		if(event.key == "Enter" || event.key == " "){
			handleSelection(event);
		}
	}
	
	const removeSelection = (event) => {
		const itemIndex = selectedOptions.findIndex((opt) => opt.title == event.target.innerText);
		console.log(`index of item ${itemIndex}`)
		const removedOption = selectedOptions.splice(itemIndex, 1)[0];
		options = [removedOption, ...options]
		selectedOptions = [...selectedOptions]
	}

</script>

<div class="multiselect_input">
	<p>
		Selected Users
	</p>
	<ul class="select_selected">
		{#each selectedOptions as so}
			<button class="select_selected_item" on:click={removeSelection} title="Unselect {so.title}">{so.title}</button>
		{/each}
	</ul>
	<div class="form_control">
		<label class="select_label" for={id}>{label}</label>
		<input bind:this={inputEl} class="select_input" 
					 bind:value={query} type="text" 
					 placeholder="search by name or email" 
					 id={id} name={name} />
	</div>
  {#if query.trim().toLowerCase() != ''}
	<ul class="select_options">
    {#each options as {title, description}, idx (title)}
      {#if title.trim().toLowerCase().includes(query.trim().toLowerCase())}
        <li tabindex="0" on:click={handleClick} on:keypress={handleKeypress} data-idx={idx}>
          <strong>{title}</strong>
          <p>{description}</p>
        </li>
      {/if}
    {/each}
			<li tabindex="0" on:click={handleClick} on:keypress={handleKeypress}>
				<strong>{query}</strong>
				<p>add "{query}" as an external user</p>
			</li>
		</ul>
  {/if}
</div>

<style>
  .form_control{
    display: flex;
    flex-direction: column;
  }
	.select_input{
		margin: 0px;
		outline-color: blue;
	}
	.select_options{
		border-bottom-right-radius: 2px;
		border-bottom-left-radius: 2px;
    list-style: none;
		border: 1px solid gray;
		margin: 0px;
		padding: 0px;
	}
	.select_options li {
		padding: 0.25em;
		outline-color: blue;
	}
	.select_options li:hover, .select_options li:focus{
		outline-color: blue;
		background: rgba(0,0,255,0.05);
		cursor: pointer;
	}
	.select_options p, .select_options strong {
		margin: 0.25em;
		pointer-events: none;
	}
	.select_selected{
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		list-style: none;
		margin: 1em 0px;
		padding: 0px;
	}
	.select_selected_item{
		background: blue;
		border: none;
		color: white;
		padding: 0.5em;
		border-radius: 4px;
	}
	.select_selected_item:hover{
		background: rgba(0,0,255,0.5);
		cursor: pointer;
	}
</style>