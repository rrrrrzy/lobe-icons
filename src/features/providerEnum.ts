export enum ModelProvider {
  Ai21 = 'ai21',
  Ai360 = 'ai360',
  Anthropic = 'anthropic',
  Azure = 'azure',
  Baichuan = 'baichuan',
  Bedrock = 'bedrock',
  DeepSeek = 'deepseek',
  Doubao = 'Doubao',
  FireworksAI = 'fireworksai',
  Github = 'github',
  Google = 'google',
  Groq = 'groq',
  HuggingFace = 'huggingface',
  Hunyuan = 'hunyuan',
  LmStudio = 'lmstudio',
  LobeHub = 'lobehub',
  Minimax = 'minimax',
  Mistral = 'mistral',
  Moonshot = 'moonshot',
  Novita = 'novita',
  Ollama = 'ollama',
  OpenAI = 'openai',
  OpenRouter = 'openrouter',
  Perplexity = 'perplexity',
  Qwen = 'qwen',
  SenseNova = 'sensenova',
  SiliconCloud = 'siliconcloud',
  Spark = 'spark',
  Stepfun = 'stepfun',
  Taichu = 'taichu',
  TogetherAI = 'togetherai',
  Upstage = 'upstage',
  Wenxin = 'wenxin',
  XAI = 'xai',
  ZeroOne = 'zeroone',
  ZhiPu = 'zhipu',
}

export type ModelProviderKey = Lowercase<keyof typeof ModelProvider>;
