<template>
  <a-layout>
    <a-typography :style="{ padding: '20px' }" class="system_content">
      <a-typography-title :level="2">介绍</a-typography-title>
      <a-typography-paragraph>
        本模型旨在用于判断英文数据集中是否存在委婉语。
      </a-typography-paragraph>
      <a-typography-paragraph>
        在自然语言处理领域，委婉语的识别对于文本分析和信息提取具有重要意义，尤其是在内容过滤、情感分析和语义理解等应用中。鉴于委婉语的复杂性和表达的多样性，本项目采用了
        <a-typography-text mark>
          数据增强、自训练和零样本学习
        </a-typography-text>
        等先进技术来提升模型的性能和泛化能力。
      </a-typography-paragraph>
      <a-typography-title :level="2">使用方法</a-typography-title>
      <a-typography-title :level="3">数据增强</a-typography-title>
      <a-typography-paragraph>
        在数据预处理阶段，我们通过数据增强技术扩充训练集，以解决可用标注数据不足的问题。具体方法包括同义词替换、句子重组等，这些操作能够在不改变原始语义的前提下，增加数据的多样性。数据增强不仅可以提高模型对未见样本的泛化能力，还有助于模型学习到更加健壮的语言特征。
      </a-typography-paragraph>

      <a-typography-paragraph>
        <blockquote>{{ blockContent }}</blockquote>
      </a-typography-paragraph>

      <a-typography-title :level="2">自训练</a-typography-title>
      <a-typography-paragraph>
        自训练作为一种
        <a-typography-text mark> 半监督学习方法 </a-typography-text>
        ，在本项目中发挥了重要作用。我们首先使用少量标注数据训练基础模型，然后利用此模型对未标注数据进行预测，选取置信度高的预测结果作为伪标签。这些伪标签数据随后被用于进一步训练模型，通过这种方式，模型能够逐渐提高其在更大数据集上的表现。自训练策略显著扩展了训练样本的规模，有助于改善模型的准确性和鲁棒性。
      </a-typography-paragraph>

      <a-typography-paragraph>
        <blockquote>{{ blockContent2 }}</blockquote>
      </a-typography-paragraph>

      <a-typography-title :level="2">零样本学习</a-typography-title>
      <a-typography-paragraph>
        考虑到委婉语的多样性及其表达方式的不断演变，我们还引入了零样本学习技术。零样本学习旨在使模型能够识别在训练阶段未出现过的类别。通过这种方法，即使是训练数据中未包含的委婉语表达，模型也有可能正确识别。这一策略基于对文本深层语义的理解，通过学习语言的潜在特征分布来实现。
      </a-typography-paragraph>

      <a-typography-title :level="2">总结</a-typography-title>
      <a-typography-paragraph>
        通过综合以上技术，我们开发的模型能够有效地识别英文数据集中的委婉语。在实验中，模型展示了较高的准确率和良好的泛化能力。此外，模型的实现还考虑了运行效率，确保可以在实际应用中快速响应。最终，该模型不仅提高了对委婉语的识别率，还为相关领域的研究提供了新的技术参考和应用可能。
      </a-typography-paragraph>
      <a-typography-paragraph>
        本毕业设计成功地实现了一个结合数据增强、自训练和零样本学习的复杂系统，用于有效识别和分析英文文本中的委婉语。该系统的开发展示了深度学习在自然语言处理中的强大潜力，特别是在处理语言的细微差异和复杂性方面。未来，我们计划进一步优化模型架构，并探索更多的数据增强和学习策略，以提升系统的整体性能和适应性。
      </a-typography-paragraph>
    </a-typography>
  </a-layout>
</template>

<script lang="ts" setup>
const blockContent = `数据增强是从现有数据中人工生成新数据的过程，主要用于训练新的机器学习（ML）模型。ML 模型需要需要使用大量不同的数据集进行初始训练，但由于数据孤岛、法规和其他限制，要获得足够多样化的真实世界数据集可能具有挑战性。数据增强通过对原始数据进行微小改动，人为地增加数据集。目前，生成式人工智能（AI）正在被用于各行各业的高质量快速数据增强。`;

const blockContent2 = `自训练是一种半监督分类方法，涉及平滑度和聚类假设，因此，自训练也称为自标记或决策导向学习。
一般来说，当标记的数据集包含大量有关数据生成过程信息并且假设未标记的样本仅负责微调手头的算法时，自训练是一个很好的选择。
然而，当这些条件不满足时，自训练的结果就不理想。因此自训练在很大程度上取决于标记样本。
自训练的每一个步骤，会根据当前的决策函数对一部分未标记的数据点进行标记，并使用预测作为附加标记点对监督模型进行重新训练。`;
</script>

<style scoped>
.system_content {
  padding: 24px;
  background: #fff;
  min-height: 240px;
  border-radius: 10px;
}
</style>
