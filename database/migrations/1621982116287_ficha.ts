import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ficha extends BaseSchema {
  protected tableName = 'ficha'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('queixa_principal', 255).notNullable()
      table.date('ginecologista_ultima_consulta')
      table.string('ciclo_menstrual_normal', 1).notNullable()
      table.string('alteracoes_ciclo_menstrual', 255)
      table.date('primeira_menstruacao')
      table.date('ultima_menstruacao')
      table.string('sop', 1).notNullable()
      table.string('climaterio', 1).notNullable()
      table.string('menopausa', 1).notNullable()
      table.string('reposicao_hormonal', 1).notNullable()
      table.string('gestante', 1).notNullable()
      table.integer('meses_gestacao')
      table.integer('quantidade_gravidez').notNullable()
      table.integer('quantidade_filhos').notNullable()
      table.string('idades_filhos', 45)
      table.string('seios_normais', 1).notNullable()
      table.string('seios_alteracoes', 255)
      table.string('contraceptivos_hormonais', 1).notNullable()
      table.string('contraceptivos_hormonais_tempo', 45)
      table.string('hirsutismo', 1).notNullable()
      table.string('hirsutismo_repentino', 1)
      table.string('hirsutismo_idade', 45)
      table.string('diabetes', 1).notNullable()
      table.string('tireoide', 1).notNullable()
      table.string('marca_passo', 1).notNullable()
      table.string('cardiaco_observacoes', 255)
      table.string('hipotensao', 1).notNullable()
      table.string('hipertensao', 1).notNullable()
      table.string('alergias', 255)
      table.string('tratamento_dermatologico', 1).notNullable()
      table.string('tratamento_dermatologico_justificativa', 255)
      table.string('tratamento_dermatologico_em_uso', 255)
      table.string('tratamento_dermatologico_em_uso_tempo', 45)
      table.string('tratamento_dermatologico_anterior', 1).notNullable()
      table.string('tratamento_dermatologico_anterior_justificativa', 255)
      table.string('tratamento_dermatologico_anterior_usado', 255)
      table.string('tratamento_dermatologico_anterior_tempo', 45)
      table.string('ansiedade', 1).notNullable()
      table.string('impaciencia', 1).notNullable()
      table.string('depressão', 1).notNullable()
      table.string('choque_emocional', 1).notNullable()
      table.string('usa_antidepressivos', 1).notNullable()
      table.string('antidepressivos', 255)
      table.foreign('sono_id').references('id').inTable('sono').notNullable()
      table.string('usa_remedios_para_dormir', 1).notNullable()
      table
        .foreign('sensibilidade_a_dor_id')
        .references('id')
        .inTable('sensibilidade_a_dor')
        .notNullable()
      table.foreign('estresse_id').references('id').inTable('estresse').notNullable()
      table.string('checkups_medicos_regularmente', 1).notNullable()
      table.string('enfermidades_atuais', 255)
      table.string('enfermidades_anteriores', 255)
      table.string('medicamentos_dores', 1).notNullable()
      table.string('medicamentos_epilepsia', 1).notNullable()
      table.string('medicamentos_antecedentes_oncologicos', 1).notNullable()
      table.string('medicamentos_retencao_hidrica', 1).notNullable()
      table.string('medicamentos_rosacea', 1).notNullable()
      table.string('medicamentos_lentes_de_contato', 1).notNullable()
      table.string('medicamentos_tonturas', 1).notNullable()
      table.string('medicamentos_problemas_renais', 1).notNullable()
      table.string('medicamentos_lupus', 1).notNullable()
      table.string('medicamentos_queloides', 1).notNullable()
      table.string('medicamentos_implante_dentario', 1).notNullable()
      table.string('medicamentos_falta_de_ar', 1).notNullable()
      table.string('medicamentos_uso_de_corticoides', 1).notNullable()
      table.string('medicamentos_psoriase', 1).notNullable()
      table.string('medicamentos_dermatite_seborreica', 1).notNullable()
      table.string('medicamentos_placas_metalicas_face', 1).notNullable()
      table
        .foreign('frequencia_atividades_fisicas_id')
        .references('id')
        .inTable('frequencia_atividades_fisicas')
        .notNullable()
      table.string('atividades_fisicas', 255)
      table.string('alimentacao', 255).notNullable()
      table.string('agua_quantidade', 45).notNullable()
      table.integer('agua_copos').notNullable()
      table.string('etilismo', 255).notNullable()
      table.string('fumante', 1).notNullable()
      table.integer('cigarros_dia')
      table.string('fumante_inicio', 45)
      table.string('fumante_fim', 45)
      table
        .foreign('funcao_intestinal_id')
        .references('id')
        .inTable('funcao_intestinal')
        .notNullable()
      table.string('funcao_intestinal_obs', 255)
      table.string('informacoes_complementares', 255)
      table.string('tratamentos_esteticos_anteriores', 255)
      table.string('cirurgia_plastica_face', 255)
      table.string('cirurgia_plastica_face_tempo', 45)
      table.string('uso_de_cosmeticos_limpeza', 255)
      table.string('uso_de_cosmeticos_esfoliacao', 255)
      table.string('uso_de_cosmeticos_tonificacao', 255)
      table.string('uso_de_cosmeticos_acidos', 255)
      table.string('uso_de_cosmeticos_hidratacao', 255)
      table.string('uso_de_cosmeticos_tratamentos_especificos', 255)
      table.string('uso_de_cosmeticos_fotoprotecao', 255)
      table.foreign('exposicao_solar_id').references('id').inTable('exposicao_solar').notNullable()
      table.string('uso_de_cosmeticos_maquiagem', 255)
      table.string('cosmeticos_sensibilidade', 255)
      table.foreign('fototipo_id').references('id').inTable('fototipo').notNullable()
      table.foreign('etnia_id').references('id').inTable('etnia').notNullable()
      table.foreign('tipo_pele_id').references('id').inTable('tipo_pele').notNullable()
      table.foreign('pele_ao_tato_id').references('id').inTable('pele_ao_tato').notNullable()
      table
        .foreign('pele_sensibilidade_id')
        .references('id')
        .inTable('pele_sensibilidade')
        .notNullable()
      table.string('pele_sensibilidade_observacao', 255)
      table.string('acromias', 1).notNullable()
      table.string('hipocromias', 1).notNullable()
      table.string('efelides', 1).notNullable()
      table.string('melasmas', 1).notNullable()
      table.string('lentigos', 1).notNullable()
      table.string('melanose', 1).notNullable()
      table.string('hipercromia_pos_traumatica', 1).notNullable()
      table.string('hipercromia_pos_inflamatoria', 1).notNullable()
      table.string('xantelasmas', 1).notNullable()
      table.string('hiperplasia_sebacea', 1).notNullable()
      table.string('cicatrizes', 1).notNullable()
      table.string('seborreia', 1).notNullable()
      table.string('flacidez_muscular', 1).notNullable()
      table.string('comedoes_capilares', 1).notNullable()
      table.string('eritemas', 1).notNullable()
      table.string('verrugas', 1).notNullable()
      table.string('queratose_pilar_folicular', 1).notNullable()
      table.string('asfitica', 1).notNullable()
      table.string('ostios_dilatados', 1).notNullable()
      table.string('flacidez_tissular', 1).notNullable()
      table.string('microcomedoes', 1).notNullable()
      table.string('edemas', 1).notNullable()
      table.string('nevos', 1).notNullable()
      table.string('dermografismo', 1).notNullable()
      table.string('talangiectasias', 1).notNullable()
      table.string('miliuns', 1).notNullable()
      table.string('escoriacoes', 1).notNullable()
      table.string('comedoes_abertos', 1).notNullable()
      table.string('hematomas', 1).notNullable()
      table
        .foreign('fotoenvelhecimento_id')
        .references('id')
        .inTable('fotoenvelhecimento')
        .notNullable()
      table.string('verrugas_frontal', 255)
      table.string('verrugas_glabela', 255)
      table.string('verrugas_orbicular_olhos', 255)
      table.string('verrugas_orbicular_labios', 255)
      table.string('verrugas_lateral_face', 255)
      table.string('verrugas_sulco_nasogeniano', 255)
      table.string('verrugas_pescoco', 255)
      table.string('verrugas_colo', 255)
      table.string('pustulas', 1).notNullable()
      table.string('nodulos', 1).notNullable()
      table.string('comedoes_fechados', 1).notNullable()
      table.string('papulas', 1).notNullable()
      table.foreign('acne_grau_id').references('id').inTable('acne_grau')
      table.string('acne_juvenil_vulgar', 1).notNullable()
      table.string('acne_tardia', 1).notNullable()
      table.string('acne_familia', 1).notNullable()
      table.string('acne_inicio', 45)
      table.string('acne_evolucao', 45)
      table.string('outras_consideracoes', 255)
      table.date('data').notNullable()
      table.string('assinatura_cliente', 255).notNullable()
      table.foreign('cliente_id').references('id').inTable('cliente').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
