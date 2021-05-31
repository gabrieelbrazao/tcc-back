import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../FrequenciaAtividadesFisicas'))
    await this.runSeeder(await import('../AcneGrau'))
    await this.runSeeder(await import('../Estresse'))
    await this.runSeeder(await import('../Etnia'))
    await this.runSeeder(await import('../ExposicaoSolar'))
    await this.runSeeder(await import('../Fotoenvelhecimento'))
    await this.runSeeder(await import('../Fototipo'))
    await this.runSeeder(await import('../FuncaoIntestinal'))
    await this.runSeeder(await import('../PeleAoTato'))
    await this.runSeeder(await import('../PeleSensibilidade'))
    await this.runSeeder(await import('../SensibilidadeADor'))
    await this.runSeeder(await import('../Sono'))
    await this.runSeeder(await import('../TipoPele'))
  }
}
