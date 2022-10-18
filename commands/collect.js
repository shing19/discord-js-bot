const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('collect')
		.setDescription('输入格式：题目，标签/标签/...'),
	async execute(interaction) {
		await interaction.reply(`Collected successfully!`);
	},
};