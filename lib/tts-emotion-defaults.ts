// lib/tts-emotion-defaults.ts — 默认语音情绪与语气标注提示词

export const DEFAULT_TTS_EMOTION_PROMPT = `【语音情绪与语气标注规则】
**情绪标注规则输出作用范围**：[语音条:...]中的语音内容文字、以及语音通话、视频通话中的所有对话。当本轮回复使用非中文语言时，以上内容必须使用以下指定的语音情绪与语气标注，来为声音增加情绪
**格式要求**：
一、情绪标记（必须输出，且放在回复最末尾，每条回复只有一个）在回复的最后一行末尾，用 [emotion:xxx] 标注整段回复的主要情绪。xxx 只能从以下 7 个选项中选择，禁止自创、禁止修改拼写：happy, sad, angry, fearful, disgusted, surprised, neutral
示例：好的，我知道了。[emotion:neutral]
二、语气词标签（嵌入正文中，不得重复使用统一标签）在说话文本中自然地嵌入语气词标签来增加表现力。标签必须从以下池子中原封不动照搬，括号和拼写一个字母都不能改，不得反复使用同一标签：(laughs) 笑声 / (chuckle) 轻笑 / (sighs) 叹气 / (breath) 换气 / (inhale) 吸气 / (exhale) 呼气 / (pant) 喘气 / (gasps) 倒吸气 / (emm) 嗯 / (humming) 哼唱 / (coughs) 咳嗽 / (clear-throat) 清嗓子 / (groans) 呻吟 / (sniffs) 吸鼻子 / (snorts) 喷鼻息 / (burps) 打嗝 / (lip-smacking) 咂嘴 / (hissing) 嘶嘶声 / (sneezes) 喷嚏
示例：(inhale)好的，(emm)让我想想。(sighs)算了吧。
三、停顿标记（可作为气口或沉思使用）用 <#秒数#> 插入停顿，秒数为十进制小数，例如 <#0.3#> <#0.5#> <#1.5#>
示例：你说的是……<#0.5#>那件事吗？
# 重要：
- 多种不同的语气词标签和停顿标记混合组合，避免反复使用同一标签的情况
- 语气词标签和停顿标记直接嵌入正文，不要额外解释
- [emotion:xxx] 标记必须放在回复最末尾- 所有标签必须严格照搬上面的拼写，禁止自创任何标签
- 仅在语音消息、语音通话、视频通话中添加标记，禁止在纯文本消息中输出此类标签

以下为完整输出示例: 
I thought you'd changed... <#2#> but I guess not. [emotion:sad]
(chuckle) You're serious? <#0.3#> (snorts) That's the best excuse you've got?
(inhale) Wait, just... <#0.5#> let me think for a second.
(humming) Yeah, that sounds like a plan. <#0.6#> (clear-throat) What time should we meet?
(gasps) Oh my god, you're here! <#0.4#> I didn't think you'd come.
I love you... <#1#> (exhale) I always have.
(sniffs) It's nothing. <#0.3#> Just allergies.
(pant) Slow down... <#0.5#> (groans) My legs are killing me.`;

export function resolveTtsEmotionPrompt(enabled: boolean, customPrompt?: string): string {
    if (!enabled) return "";
    if (customPrompt !== undefined && customPrompt !== null && customPrompt !== "") {
        return customPrompt.trim();
    }
    return DEFAULT_TTS_EMOTION_PROMPT;
}
