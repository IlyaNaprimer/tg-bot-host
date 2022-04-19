module.exports.VOICE_INLINE = "voice-inline";

module.exports.sendVoiceInline = (bot, operation) => {
    bot.on('voice', async ctx => {
        await ctx.replyWithMarkdown(`Voice file_id: \`${ctx.update.message.voice.file_id}\``);
    });

    bot.on('inline_query', async (ctx) => {

        const replies = operation.voices.map(x =>{
            return {
                id: x.id,
                title: x.title,
                voice_file_id: x.voice_file_id,
                type: 'voice'
            }
        })
        const filteredReplies = replies.filter(x => x.title.toLowerCase().includes(ctx.update.inline_query.query.toLowerCase()));

        ctx.answerInlineQuery(filteredReplies);
    })
}