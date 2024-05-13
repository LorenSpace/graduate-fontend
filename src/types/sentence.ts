// 定义单个句子的接口
export interface Sentence {
    content: string;
    isEuphemism: number;
    createdTime: string;
}

// 定义 API 响应的接口
export interface ApiResponse {
    success: boolean;
    errMsg: string | null;
    errCode: string | null;
    data: Sentence[];
}

// 定义输入的内容
export interface InputContent {
    content: string;
}
