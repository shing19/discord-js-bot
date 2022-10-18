const { SlashCommandBuilder } = require('discord.js');
// import materialHandler from '../notion/material/handler'
const { addMaterial } = require('../notion/handler.ts')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('collect')
		.setDescription('添加卡片')
		.addStringOption(option => 
			option.setName('题目')
				.setDescription('输入卡片的题目')
				.setMaxLength(200))
		.addStringOption(option => 
			option.setName('标签')
				.setDescription('输入卡片的标签，用空格分割')
				.setMaxLength(400)),
	async execute(interaction) {
		await interaction.deferReply();
		const message = await interaction.fetchReply();
		const author = message.interaction.user.username + '#' + message.interaction.user.discriminator;
		const title = interaction.options.getString('题目') ?? ''
		const keywords = (interaction.options.getString('标签')) ? interaction.options.getString('标签').split(' ') : [];
		const timestamp = new Date();
		// materialHandler.addMaterial(author, adder, channel.name, title, message.referencedMessage.timestamp, keywords, material, discordUrl).then(async () => {
		addMaterial(author, 'adder', 'channel.name', title, timestamp, keywords, 'material', 'discordUrl').then(async () => {
			await interaction.editReply('✅ 素材碎片添加成功! 见: https://ddaocommunity.notion.site/1dd8950a765c4b479d833409cdde13f8')
		}).catch(async () => {
			await interaction.editReply(':negative_squared_cross_mark: 添加失败, 请联络 BOT 管理员协助处理')
		});
	},
};