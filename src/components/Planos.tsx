import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PlanosResidenciais from "@/components/PlanosResidenciais";
import PlanosEmpresariais from "@/components/PlanosEmpresariais";

export default function Planos() {
  return (
    <section id="planos" className="bg-white py-20 px-4 max-lg:px-8">
      <div className="mx-auto max-w-6xl">

        <Tabs defaultValue="residencial">
          {/* Cabeçalho + tabs */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 flex items-center max-lg:justify-center gap-2 text-lg font-medium uppercase tracking-widest text-[#1a7a2a]">
                <span className="inline-block h-[2px] w-8 bg-[#1a7a2a] max-lg:hidden" />
                Planos de Internet
              </p>
              <h1 className="text-3xl font-bold uppercase leading-tight text-gray-900 md:text-4xl max-lg:text-center">
                Planos perfeitos para<br />a sua casa inteira!
              </h1>
            </div>

            <TabsList className="h-auto w-fit gap-2 rounded-full bg-transparent p-0 max-lg:mx-auto flex flex-row max-lg:flex-col mt-8">
              <TabsTrigger
                value="residencial"
                className="rounded-full border-2 border-[#1a7a2a] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#1a7a2a] data-[state=active]:bg-[#1a7a2a] data-[state=active]:text-white data-[state=active]:border-[#1a7a2a] data-[state=active]:shadow-none transition hover:bg-[#1a7a2a] hover:text-white"
              >
                Planos Residenciais
              </TabsTrigger>
              <TabsTrigger
                value="empresarial"
                className="rounded-full border-2 border-gray-300 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-gray-500 data-[state=active]:bg-[#014700] data-[state=active]:text-white data-[state=active]:border-[#014700] data-[state=active]:shadow-none transition hover:border-[#014700] hover:text-[#014700]"
              >
                Planos Empresariais
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Conteúdo das tabs */}
          <TabsContent value="residencial">
            <PlanosResidenciais />
          </TabsContent>

          <TabsContent value="empresarial">
            <PlanosEmpresariais />
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
