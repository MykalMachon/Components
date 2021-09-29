<script>
  import MultiSelect from './MultiSelect.svelte';
  const options = [
    {title: 'Mykal Machon', description: 'System Analyst in Application Services'},
    {title: 'Andrew Machon', description: 'Electrician at Power Pros Elctrical'},
    {title: 'Dylan Morisson', description: 'Electrician at COL Electrical'}
  ];
</script>

<MultiSelect id="test" name="test" label="Select Users" options={options} />