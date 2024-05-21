// export async function GET({ params, request }: any) {
//   console.log("this route: yayyyy");

//   return new Response(
//     JSON.stringify({
//       name: "Astro using route endpoint",
//       url: "https://astro.build/",
//     })
//   );
// }

// export async function POST({ params, request }: any) {
//   try {
//     const body = await request.json()
//     console.log(body);

//     return new Response(
//       JSON.stringify({
//         name: "Astro using route endpoint",
//         body
//       })
//     );
//   } catch (error) {
//     console.log(error);
//     return new Response(null);
//   }
// }
