const widthSize = 432;

export const schemaCompany = {
  fields: [
    {
      title: 'Basic information',
      type: 'text',
      name: 'name',
      id: 'name',
      placeholder: 'Digite o nome fantasia',
      label: 'Nombre empresa',
      width: widthSize,
      minLength: 2,
      maxLength: 60,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'text',
      name: 'companyName',
      id: 'companyName',
      placeholder: 'Digite a razão social da empresa',
      label: 'Razão Social',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'selectCountry',
      name: 'country',
      id: 'country',
      label: 'País',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'cnpj',
      name: 'cnpj',
      id: 'cnpj',
      placeholder: 'Digite o CNPJ',
      label: 'CNPJ',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'text',
      name: 'occupationArea',
      id: 'occupationArea',
      placeholder: 'Digite a área de atuação da empresa',
      label: 'Área de Atuação',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'text',
      name: 'street',
      id: 'street',
      placeholder: 'Rua,Avenida,Praça,Rodovia...',
      label: 'Logradouro',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'number',
      name: 'number',
      id: 'number',
      placeholder: 'Núm.',
      label: ' Nº',
      width: 132,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'zipCode',
      name: 'zipCode',
      id: 'zipCode',
      placeholder: 'Núm.',
      label: 'CEP',
      width: 144,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'text',
      name: 'neighborhood',
      id: 'neighborhood',
      placeholder: 'Digite o nome do bairro',
      label: 'Bairro',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'text',
      name: 'complement',
      id: 'complement',
      placeholder: 'Digite o complemento opcional!',
      label: 'Complemento',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'text',
      name: 'city',
      id: 'city',
      placeholder: 'Digite o nome da cidade',
      label: 'Cidade',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'state',
      name: 'state',
      id: 'state',
      placeholder: 'Digite o estado',
      label: 'Estado',
      width: 216,
      helperTextErrorMinLenght: ('O campo deve ter pelo menos 02 caracteres!'),
      helperTextErrorMaxLenght: ('O campo deve ter no máximo 60 caracteres!'),
      helperTextErrorRequired: ('Campo obrigatório!')
    },
    {
      title: 'Sistema',
      type: 'text',
      name: 'code',
      id: 'code',
      placeholder: 'Digite o código da empresa',
      label: 'Código da Empresa',
      width: widthSize,
      helperTextErrorMinLenght: ('O campo deve ter pelo menos 02 caracteres!'),
      helperTextErrorMaxLenght: ('O campo deve ter no máximo 60 caracteres!'),
      helperTextErrorRequired: ('Campo obrigatório!')
    },
    {
      type: 'text',
      name: 'coorporation',
      id: ' coorporation',
      placeholder: 'Seleciona a Corporação da Empresa',
      label: 'Corporação',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      title: 'Usuário Responsável',
      type: 'text',
      name: 'nameResponsibleUser',
      id: 'nameResponsibleUser',
      placeholder: 'Nome do usuário responsável',
      label: 'Nome do Responsável',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    },
    {
      type: 'text',
      name: 'responsibleEmail',
      id: 'responsibleEmail',
      placeholder: 'Digite o e-mail',
      label: 'E-mail de login',
      helperText: 'Um e-mail será enviado com as informações de acesso.',
      width: widthSize,
      helperTextErrorMinLenght: 'O campo deve ter pelo menos 02 caracteres!',
      helperTextErrorMaxLenght: 'O campo deve ter no máximo 60 caracteres!',
      helperTextErrorRequired: 'Campo obrigatório!'
    }
  ]
};
