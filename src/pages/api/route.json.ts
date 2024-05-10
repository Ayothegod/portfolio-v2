
export async function GET({params, request}: any) {
    return new Response(
      JSON.stringify({
        name: 'Astro using route endpoint',
        url: 'https://astro.build/'
      })
    )
  }