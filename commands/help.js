const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('获得食用指南'),
        async execute(interaction) {
            await interaction.reply({ 
                content: ':information_source: 请回复你想要存入素材库的信息，并依照此格式输入：\n\n@dToys [标题], [标签1]/[标签2]/.../[标签3]\n\n"@" 标注时请选择机器人 dToys，括号不用填，标题与标签的分隔逗点可为半形或全形。\n\n本提示将在 30 秒后自动删除', 
                ephemeral: true
            });
        }
}