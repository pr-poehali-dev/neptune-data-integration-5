import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Lobby from "@/components/Lobby"

const Index = () => {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen flex flex-col justify-end pb-8">
        <HeroContent />
        <PulsingCircle />
      </div>
      <Lobby />
    </ShaderBackground>
  )
}

export default Index