export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const accessKey = config.web3formsAccessKey || '358a7427-79e7-4aaa-80ab-98be68b368f1';

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide all required fields (name, email, message).',
    });
  }

  try {
    const response: any = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: {
        access_key: accessKey,
        name: body.name,
        email: body.email,
        subject: body.subject ? `[4bin Portfolio] ${body.subject}` : 'New Open Collaboration Inquiry from 4bin.vercel.app',
        message: body.message,
        from_name: `${body.name} via 4bin Portfolio`,
      },
    });

    if (response && response.success) {
      return { success: true, message: 'Message sent successfully.' };
    }

    throw createError({
      statusCode: 502,
      statusMessage: response?.message || 'Error from email dispatch service.',
    });
  } catch (err: any) {
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage: err.message || 'Failed to dispatch contact message.',
    });
  }
});
